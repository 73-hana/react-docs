FROM node:18-alpine
# 作業ディレクトリを指定、ベースにない場合は作成される
WORKDIR /var/www/html/react-app

# コンテナの使用ポート指定
EXPOSE 3000 