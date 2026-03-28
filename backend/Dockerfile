# 1. Chọn Base Image: Dùng Node.js phiên bản Alpine (siêu nhẹ, phù hợp cho Microservices)
FROM node:18-alpine

# 2. Tạo thư mục làm việc bên trong Container
WORKDIR /app

# 3. Copy file package.json vào trước để cài đặt các thư viện (express, cors)
COPY package.json ./
RUN npm install

# 4. Copy toàn bộ mã nguồn (file server.js) vào Container
COPY . .

# 5. Mở cổng 3000 để Frontend có thể giao tiếp được
EXPOSE 3000

# 6. Lệnh khởi động máy chủ khi Container bắt đầu chạy
CMD ["node", "server.js"]