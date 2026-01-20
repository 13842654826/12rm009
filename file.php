<?php
// 简单的PHP脚本示例
echo "<!DOCTYPE html>";
echo "<html>";
echo "<head>";
echo "<title>PHP示例</title>";
echo "<style>";
echo "body { font-family: Arial, sans-serif; margin: 20px; }";
echo ".container { max-width: 800px; margin: 0 auto; }";
echo ".success { color: green; }";
echo ".error { color: red; }";
echo "</style>";
echo "</head>";
echo "<body>";

echo "<div class='container'>";
echo "<h1>PHP脚本示例</h1>";

// 变量示例
$name = "访客";
$currentDate = date("Y-m-d H:i:s");

// 条件语句
if (isset($_GET['name']) && !empty($_GET['name'])) {
    $name = htmlspecialchars($_GET['name']);
    echo "<p class='success'>欢迎, " . $name . "!</p>";
} else {
    echo "<p>请通过URL参数 'name' 传递您的名字</p>";
    echo "<p>例如: file.php?name=张三</p>";
}

echo "<p>当前时间: " . $currentDate . "</p>";

// 数组示例
$colors = array("红色", "绿色", "蓝色", "黄色", "紫色");
echo "<h3>颜色列表:</h3>";
echo "<ul>";
foreach ($colors as $color) {
    echo "<li>" . $color . "</li>";
}
echo "</ul>";

// 函数示例
function calculateSum($a, $b) {
    return $a + $b;
}

echo "<p>10 + 15 = " . calculateSum(10, 15) . "</p>";

echo "</div>";
echo "</body>";
echo "</html>";
?>