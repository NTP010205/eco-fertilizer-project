const express = require('express');
const cors = require('cors');

const app = express();

// Kích hoạt CORS để cho phép web Netlify giao tiếp với máy chủ này
app.use(cors()); 
// Cho phép Server đọc dữ liệu định dạng JSON
app.use(express.json()); 

// Tạo một mảng lưu dữ liệu tạm thời (Mock Database)
const records = [];

// ==========================================
// CHƯƠNG 5: RESTful API ENDPOINT
// ==========================================
app.post('/api/thu-gom', (req, res) => {
    // 1. Hứng dữ liệu từ người dùng gửi lên
    const { coordinator, weight, location } = req.body;

    // Kiểm tra dữ liệu
    if (!coordinator || !weight || !location) {
        return res.status(400).json({ message: "Thiếu thông tin dữ liệu!" });
    }

    // 2. Tạo bản ghi mới
    const newRecord = {
        id: 'ECO-' + Math.floor(1000 + Math.random() * 9000), // Tạo mã ID ngẫu nhiên
        coordinator: coordinator,
        weight: weight,
        location: location,
        timestamp: new Date().toLocaleString('vi-VN')
    };
    
    // Lưu vào cơ sở dữ liệu (tạm thời lưu vào mảng)
    records.push(newRecord);

    // In ra màn hình Terminal để quản trị viên dễ theo dõi
    console.log(`[LOG] 📥 Nhận ${weight}kg thức ăn thừa từ ${location} - Phụ trách: ${coordinator}`);

    // 3. Trả kết quả báo thành công về lại cho Giao diện web
    res.status(200).json({
        message: "Ghi nhận dữ liệu thành công",
        data: newRecord
    });
});
// Tính năng mới (v2): Xem danh sách dữ liệu đã nhập
app.get('/api/danh-sach', (req, res) => {
    // Trả về toàn bộ mảng records dưới dạng JSON
    res.json(records);
});

// ==========================================
// KHỞI ĐỘNG MÁY CHỦ (MICROSERVICE)
// ==========================================
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Microservice API đang chạy tại http://localhost:${PORT}`);
});