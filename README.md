# 🌱 Hệ Thống Thu Gom Thức Ăn Thừa Làm Phân Bón (Eco-Fertilizer)

![Azure](https://img.shields.io/badge/Deploy-Microsoft_Azure-blue?style=for-the-badge&logo=microsoft-azure)
![Docker](https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker)
![NodeJS](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=node.js)

Dự án phát triển nền tảng web ứng dụng Điện toán đám mây nhằm thu gom thức ăn thừa từ các nhà hàng, quán ăn, và hộ gia đình để tái chế thành phân bón hữu cơ. Đồ án môn học được thực hiện bởi sinh viên Khoa Công nghệ Thông tin - Đại học Văn Lang.

## 🚀 Kiến trúc hệ thống (Microservices & Cloud)

Hệ thống được thiết kế theo mô hình Microservices, tách biệt hoàn toàn Frontend và Backend, triển khai 100% trên nền tảng Microsoft Azure:
- **Frontend:** Xây dựng bằng HTML/CSS/JS thuần, được lưu trữ và phân phối dưới dạng Static Web App trên **Azure Blob Storage**.
- **Backend:** Xây dựng bằng Node.js & Express, cung cấp RESTful API. 
- **Containerization:** Backend được đóng gói bằng **Docker** (Image versioning qua **Azure Container Registry - ACR**) và vận hành trên **Azure Container Instances (ACI)**.

## 🔗 Các API Endpoints
- `POST /api/thu-gom`: Tiếp nhận dữ liệu rác thải (người phụ trách, khối lượng, địa điểm) từ Frontend.
- `GET /api/danh-sach`: Truy xuất toàn bộ danh sách dữ liệu thu gom theo thời gian thực (In-memory storage).

## 💻 Hướng dẫn chạy dự án ở môi trường Local

### 1. Khởi chạy Backend bằng Docker
Mở Terminal tại thư mục `backend` và chạy các lệnh sau:
```bash
# Build Docker image
docker build -t eco-api:v4 .

# Chạy container ở port 3000
docker run -d -p 3000:3000 --name backend-api eco-api:v4
```

### 2. Khởi chạy Frontend
Mở file frontend/index.html.
```
Đảm bảo biến apiUrl đang trỏ về http://localhost:3000/api/thu-gom.

Mở file index.html bằng trình duyệt (hoặc dùng Live Server extension) để sử dụng.

☁️ Hướng dẫn Triển khai (Deployment) trên Azure
Hệ thống sử dụng Azure CLI để vận hành.

1. Đẩy Backend lên Cloud:
# Push image lên Azure Container Registry
docker push ecoregistryphatk30.azurecr.io/eco-api:v4

# Khởi tạo máy chủ trên Azure Container Instances
az container create --resource-group EcoFertilizer_Group --name eco-api-service --image ecoregistryphatk30.azurecr.io/eco-api:v4 --cpu 1 --memory 1.5 --registry-login-server ecoregistryphatk30.azurecr.io --registry-username ecoregistryphatk30 --registry-password <YOUR_PASSWORD> --ip-address Public --ports 3000

2. Đẩy Frontend lên Azure Storage:
cd frontend
az storage blob upload-batch --source . --destination '$web' --account-name ecowebphat2026 --overwrite
```
👨‍💻 Tác giả
- **Họ tên:** Nguyễn Thành Phát
- **MSSV:** 2474802016639
- **Lớp:** K30CNTT07 - Nhóm On Nine Could
- **Trường:** Đại học Văn Lang (VLU)
---
- **Họ tên:** Huỳnh Trí Minh
- **MSSV:** 2474802010235
- **Lớp:** K30CNTT07 - Nhóm On Nine Could
- **Trường:** Đại học Văn Lang (VLU)

---
- **Họ tên:** Huỳnh Gia Huy
- **MSSV:** 2474802010135
- **Lớp:** K30CNTT07 - Nhóm On Cloud Nine Could
- **Trường:** Đại học Văn Lang (VLU)
GitHub: @NTP010205
