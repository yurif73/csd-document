<?php
// Настройка заголовков ответа
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Обработка Preflight-запросов CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Получаем данные, проверяя как стандартный POST, так и JSON-запрос
$data = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Проверяем, пришли ли данные в формате JSON
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
    if (stripos($contentType, 'application/json') !== false) {
        $rawInput = file_get_contents('php://input');
        $data = json_decode($rawInput, true);
    } else {
        // Стандартный POST (FormData)
        $data = $_POST;
    }
} else {
    echo json_encode(["success" => false, "message" => "Допускается только метод POST."]);
    exit();
}

// Извлекаем поля
$name = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$company = isset($data['company']) ? trim(strip_tags($data['company'])) : '';
$email = isset($data['email']) ? trim(strip_tags($data['email'])) : '';
$phone = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$volume = isset($data['volume']) ? trim(strip_tags($data['volume'])) : '';
$format = isset($data['format']) ? trim(strip_tags($data['format'])) : '';
$details = isset($data['details']) ? trim(strip_tags($data['details'])) : '';

// Обязательные поля
if (empty($name) || empty($email) || empty($phone)) {
    echo json_encode(["success" => false, "message" => "Пожалуйста, заполните обязательные поля: Имя, Email и Телефон."]);
    exit();
}

// Карта расшифровки форматов
$formatsMap = [
    'dwg' => 'AutoCAD (.dwg, .dxf)',
    'indd' => 'InDesign (.indd, .idml)',
    'pdf' => 'PDF / Чертежи',
    'tex' => 'LaTeX (.tex)',
    'xml' => 'DITA / XML (.xml, .strings)',
    'other' => 'Другие форматы'
];

$formatLabel = isset($formatsMap[$format]) ? $formatsMap[$format] : $format;

// Формируем тему письма
$subjectText = "Новая заявка с сайта ЦСД от " . $name;
if (!empty($company)) {
    $subjectText .= " (" . $company . ")";
}
$subject = "=?utf-8?B?" . base64_encode($subjectText) . "?=";

// Email получателя
$to = "info@csd-document.ru";

// Составляем HTML-письмо
$message = "
<html>
<head>
  <title>Заявка с сайта ООО «ЦСД»</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333333; }
    h2 { color: #0891b2; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
    table { width: 100%; border-collapse: collapse; margin-top: 15px; }
    th { text-align: left; background-color: #f8fafc; padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; width: 30%; }
    td { padding: 10px; border: 1px solid #e2e8f0; }
    .footer { margin-top: 30px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 10px; }
  </style>
</head>
<body>
  <h2>Новое обращение с веб-сайта ООО «ЦСД»</h2>
  <p>Пользователь отправил форму со следующими параметрами:</p>
  
  <table>
    <tr>
      <th>Имя отправителя:</th>
      <td>" . htmlspecialchars($name) . "</td>
    </tr>";

if (!empty($company)) {
    $message .= "
    <tr>
      <th>Организация:</th>
      <td>" . htmlspecialchars($company) . "</td>
    </tr>";
}

$message .= "
    <tr>
      <th>Email адрес:</th>
      <td><a href='mailto:" . htmlspecialchars($email) . "'>" . htmlspecialchars($email) . "</a></td>
    </tr>
    <tr>
      <th>Телефон:</th>
      <td><a href='tel:" . htmlspecialchars($phone) . "'>" . htmlspecialchars($phone) . "</a></td>
    </tr>";

if (!empty($volume)) {
    $message .= "
    <tr>
      <th>Объем перевода:</th>
      <td>" . htmlspecialchars($volume) . "</td>
    </tr>";
}

if (!empty($formatLabel)) {
    $message .= "
    <tr>
      <th>Формат документов:</th>
      <td>" . htmlspecialchars($formatLabel) . "</td>
    </tr>";
}

if (!empty($details)) {
    $message .= "
    <tr>
      <th>Дополнительные детали:</th>
      <td>" . nl2br(htmlspecialchars($details)) . "</td>
    </tr>";
}

$message .= "
  </table>
  
  <p class='footer'>
    Письмо сформировано автоматически веб-сервером csd-document.ru.<br>
    Дата отправки: " . date("d.m.Y H:i:s") . " (МСК)<br>
    IP-адрес отправителя: " . htmlspecialchars($_SERVER['REMOTE_ADDR']) . "
  </p>
</body>
</html>
";

// Настройка заголовков письма
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: =?utf-8?B?" . base64_encode("Бюро переводов ЦСД") . "?= <info@csd-document.ru>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// Отправка письма
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => true, "message" => "Сообщение успешно отправлено."]);
} else {
    echo json_encode(["success" => false, "message" => "Ошибка при отправке письма через встроенный почтовый сервер."]);
}
?>
