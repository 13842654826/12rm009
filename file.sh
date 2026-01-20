#!/bin/bash

# 简单的Shell脚本示例
# 作者: $(whoami)
# 创建日期: $(date)

echo "======================================"
echo "Shell脚本示例"
echo "======================================"

# 显示系统信息
echo "当前用户: $(whoami)"
echo "主机名: $(hostname)"
echo "当前目录: $(pwd)"
echo "当前日期: $(date)"

# 创建目录示例
echo ""
echo "创建示例目录..."
mkdir -p example_dir
cd example_dir || exit

# 创建文件
echo "创建示例文件..."
for i in {1..5}; do
  echo "这是文件 $i 的内容" > "file_$i.txt"
done

echo "已创建5个文件"

# 显示文件列表
echo ""
echo "当前目录文件:"
ls -la

# 计数示例
echo ""
echo "文件计数: $(ls -1 | wc -l)"

# 读取文件内容示例
echo ""
echo "第一个文件的内容:"
cat file_1.txt 2>/dev/null || echo "文件不存在"

# 简单的用户交互
echo ""
read -rp "请输入您的名字: " username
if [ -n "$username" ]; then
  echo "你好, $username!"
else
  echo "您没有输入名字"
fi

# 返回上级目录
cd ..

# 清理示例
echo ""
read -rp "是否删除示例目录? (y/n): " answer
if [ "$answer" = "y" ] || [ "$answer" = "Y" ]; then
  rm -rf example_dir
  echo "已删除示例目录"
else
  echo "保留示例目录"
fi

echo ""
echo "脚本执行完成!"