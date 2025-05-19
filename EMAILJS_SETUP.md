# Hướng dẫn cấu hình EmailJS cho chức năng liên hệ

Tài liệu này hướng dẫn cách cấu hình EmailJS để kích hoạt chức năng gửi email từ form liên hệ trong portfolio.

## Bước 1: Đăng ký tài khoản EmailJS

1. Truy cập [EmailJS](https://www.emailjs.com/) và đăng ký tài khoản miễn phí
2. Sau khi đăng nhập, bạn sẽ được chuyển đến bảng điều khiển

## Bước 2: Tạo Email Service

1. Trong bảng điều khiển, chọn "Email Services" từ menu bên trái
2. Nhấp vào "Add New Service"
3. Chọn nhà cung cấp email của bạn (Gmail, Outlook, v.v.)
4. Làm theo hướng dẫn để kết nối tài khoản email của bạn
5. Đặt tên cho service (ví dụ: "service_portfolio")
6. Lưu lại Service ID để sử dụng sau này

## Bước 3: Tạo Email Template

1. Trong bảng điều khiển, chọn "Email Templates" từ menu bên trái
2. Nhấp vào "Create New Template"
3. Đặt tên cho template (ví dụ: "template_contact")
4. Thiết kế template email với các biến sau:
   - `{{name}}`: Tên người gửi
   - `{{email}}`: Email người gửi
   - `{{subject}}`: Tiêu đề tin nhắn
   - `{{message}}`: Nội dung tin nhắn
5. Ví dụ về nội dung template:

```
Tin nhắn mới từ Portfolio

Tên: {{name}}
Email: {{email}}
Tiêu đề: {{subject}}

Nội dung:
{{message}}
```

6. Lưu lại Template ID để sử dụng sau này

## Bước 4: Lấy Public Key

1. Trong bảng điều khiển, chọn "Account" từ menu bên trái
2. Tìm mục "API Keys"
3. Sao chép "Public Key" để sử dụng sau này

## Bước 5: Cập nhật mã nguồn

Mở file `src/components/Contact.tsx` và cập nhật các biến sau với thông tin từ tài khoản EmailJS của bạn:

```typescript
const EMAILJS_SERVICE_ID = 'service_portfolio'; // Thay bằng Service ID của bạn
const EMAILJS_TEMPLATE_ID = 'template_contact'; // Thay bằng Template ID của bạn
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Thay bằng Public Key của bạn
```

## Kiểm tra

1. Chạy ứng dụng với lệnh `npm run dev`
2. Điền thông tin vào form liên hệ và nhấn "Gửi tin nhắn"
3. Kiểm tra email của bạn để xác nhận rằng tin nhắn đã được gửi thành công

## Giới hạn của tài khoản miễn phí

Tài khoản EmailJS miễn phí có các giới hạn sau:
- 200 email mỗi tháng
- Không có hỗ trợ SMTP tùy chỉnh
- Có logo EmailJS trong email

Nếu cần gửi nhiều email hơn hoặc cần các tính năng bổ sung, bạn có thể nâng cấp lên gói trả phí.

## Tài liệu tham khảo

- [Tài liệu EmailJS](https://www.emailjs.com/docs/)
- [EmailJS React](https://www.emailjs.com/docs/examples/reactjs/)
