#!/bin/csh

# 简单的C-Shell脚本示例
# C-Shell脚本语法与Bash不同

echo "======================================"
echo "C-Shell脚本示例"
echo "======================================"

# 显示系统信息
echo "当前用户: `whoami`"
echo "主机名: `hostname`"
echo "当前目录: `pwd`"
echo "当前日期: `date`"

# 变量设置
set username = `whoami`
set host = `hostname`
set current_date = `date`

echo ""
echo "用户名: $username"
echo "主机名: $host"
echo "日期: $current_date"

# 创建目录
echo ""
echo "创建示例目录..."
mkdir -p csh_example
cd csh_example

# 创建文件
echo "创建示例文件..."
foreach i (1 2 3 4 5)
  echo "这是C-Shell创建的文件 $i" > "csh_file_$i.txt"
end

echo "已创建5个文件"

# 显示文件
echo ""
echo "文件列表:"
ls -la

# 文件计数
echo ""
@ filecount = `ls -1 | wc -l`
echo "文件数量: $filecount"

# 用户输入
echo ""
echo -n "请输入您的年龄: "
set age = $<

# 条件判断
if ($age < 18) then
  echo "您是未成年人"
else if ($age >= 18 && $age < 60) then
  echo "您是成年人"
else
  echo "您是老年人"
endif

# 循环示例
echo ""
echo "计数从1到5:"
set count = 1
while ($count <= 5)
  echo "计数: $count"
  @ count++
end

# 返回上级目录
cd ..

# 清理
echo ""
echo -n "是否删除示例目录? (y/n): "
set answer = $<

if ($answer == "y" || $answer == "Y") then
  rm -rf csh_example
  echo "已删除示例目录"
else
  echo "保留示例目录"
endif

echo ""
echo "C-Shell脚本执行完成!"
exit 0