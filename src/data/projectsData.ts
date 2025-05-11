export interface Project {
  title: string;
  shortDescription: string;
  fullDescription: string;
  challenges: string;
  solutions: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Ecommerce Dashboard",
    shortDescription: "Bảng điều khiển quản lý toàn diện cho cửa hàng trực tuyến.",
    fullDescription: "Một bảng điều khiển quản trị toàn diện cho các cửa hàng thương mại điện tử, cho phép người dùng quản lý sản phẩm, đơn hàng, khách hàng và phân tích dữ liệu bán hàng trong một giao diện thống nhất.",
    challenges: "Thách thức lớn nhất là tạo ra một giao diện người dùng linh hoạt có thể hiển thị lượng lớn dữ liệu mà không ảnh hưởng đến hiệu suất. Đồng thời, phải đảm bảo khả năng sử dụng trên nhiều thiết bị khác nhau.",
    solutions: "Tôi đã sử dụng React với các kỹ thuật chia nhỏ dữ liệu, phân trang và lazy loading để tăng hiệu suất. Sử dụng Tailwind CSS để xây dựng giao diện phản hồi nhanh và dễ bảo trì. Redux được áp dụng để quản lý trạng thái phức tạp trên toàn ứng dụng.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Chart.js", "REST API"],
    image: "https://images.pexels.com/photos/953862/pexels-photo-953862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/ecommerce-dashboard"
  },
  {
    title: "Social Media Platform",
    shortDescription: "Nền tảng mạng xã hội cho phép người dùng kết nối và chia sẻ nội dung.",
    fullDescription: "Một nền tảng mạng xã hội với đầy đủ tính năng, cho phép người dùng tạo hồ sơ, kết nối với bạn bè, đăng bài viết, hình ảnh và video, cũng như tương tác thông qua bình luận và thông báo theo thời gian thực.",
    challenges: "Việc xây dựng một hệ thống thông báo thời gian thực mượt mà và quản lý hiệu quả luồng dữ liệu phức tạp giữa người dùng là những thách thức lớn. Hơn nữa, cần thiết kế một hệ thống có khả năng mở rộng để đáp ứng số lượng người dùng tăng trưởng.",
    solutions: "Tôi đã sử dụng Socket.io cho các kết nối thời gian thực và thiết kế một kiến trúc microservice để tăng khả năng mở rộng. MongoDB được chọn vì khả năng lưu trữ dữ liệu linh hoạt, và tôi đã tối ưu hóa truy vấn để cải thiện hiệu suất.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS S3"],
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/social-platform"
  },
  {
    title: "Task Management App",
    shortDescription: "Ứng dụng quản lý công việc và dự án với nhiều tính năng đa dạng.",
    fullDescription: "Một công cụ quản lý công việc toàn diện cho phép người dùng tạo, tổ chức và theo dõi nhiệm vụ theo dự án, thiết lập deadline, phân công việc cho các thành viên và theo dõi tiến độ dự án.",
    challenges: "Việc thiết kế một hệ thống quản lý trạng thái mạnh mẽ để theo dõi nhiều nhiệm vụ với các mối quan hệ phức tạp và đồng bộ hóa dữ liệu giữa nhiều người dùng là thách thức lớn nhất.",
    solutions: "Tôi đã triển khai một kiến trúc state management tùy chỉnh kết hợp giữa Context API và các hooks để quản lý trạng thái cục bộ và toàn cục. Firebase Realtime Database được sử dụng để đồng bộ hóa dữ liệu giữa các thiết bị và người dùng theo thời gian thực.",
    technologies: ["React", "Firebase", "Context API", "Tailwind CSS", "Drag & Drop API"],
    image: "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/task-manager"
  },
  {
    title: "Weather Forecast App",
    shortDescription: "Ứng dụng dự báo thời tiết với dữ liệu thời gian thực và giao diện trực quan.",
    fullDescription: "Một ứng dụng dự báo thời tiết trực quan cung cấp thông tin thời tiết hiện tại và dự báo cho nhiều ngày tới dựa trên vị trí người dùng hoặc vị trí được tìm kiếm. Ứng dụng hiển thị nhiệt độ, độ ẩm, tốc độ gió và các điều kiện thời tiết khác.",
    challenges: "Việc tích hợp và xử lý dữ liệu từ nhiều API thời tiết khác nhau, đồng thời cung cấp trải nghiệm người dùng mượt mà khi chuyển đổi giữa các địa điểm là thách thức chính.",
    solutions: "Tôi đã sử dụng React Query để quản lý việc fetching và caching dữ liệu từ các API thời tiết. Geolocation API được dùng để xác định vị trí người dùng, và tôi đã xây dựng một hệ thống chuyển đổi đơn vị linh hoạt (C/F) để nâng cao trải nghiệm người dùng.",
    technologies: ["React", "TypeScript", "React Query", "OpenWeather API", "Geolocation API", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/weather-app"
  },
  {
    title: "Recipe Sharing Platform",
    shortDescription: "Nền tảng chia sẻ công thức nấu ăn với tính năng tìm kiếm và lưu trữ.",
    fullDescription: "Một nền tảng toàn diện cho phép người dùng chia sẻ, khám phá và lưu trữ công thức nấu ăn. Người dùng có thể tìm kiếm theo nguyên liệu, thời gian chuẩn bị, hoặc loại món ăn, cũng như đánh giá và bình luận về các công thức.",
    challenges: "Xây dựng một hệ thống tìm kiếm mạnh mẽ và hiệu quả, cũng như thiết kế một cơ sở dữ liệu linh hoạt có thể lưu trữ các công thức với cấu trúc phức tạp và đa dạng là những thách thức lớn.",
    solutions: "Tôi đã triển khai Elasticsearch để tạo một hệ thống tìm kiếm mạnh mẽ và PostgreSQL với cấu trúc JSONB để lưu trữ các công thức với cấu trúc linh hoạt. GraphQL được sử dụng để truy vấn dữ liệu hiệu quả, chỉ lấy chính xác những thông tin cần thiết.",
    technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "Elasticsearch", "AWS"],
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/recipe-sharing"
  },
  {
    title: "Fitness Tracking App",
    shortDescription: "Ứng dụng theo dõi tập luyện và sức khỏe với các biểu đồ phân tích.",
    fullDescription: "Một ứng dụng fitness toàn diện cho phép người dùng theo dõi các bài tập, lập lịch trình tập luyện, ghi lại chế độ ăn uống và theo dõi tiến trình qua các biểu đồ và thống kê. Ứng dụng cũng cung cấp các bài tập được hướng dẫn và lời khuyên về dinh dưỡng.",
    challenges: "Việc thiết kế một hệ thống có thể theo dõi nhiều loại dữ liệu khác nhau (bài tập, chế độ ăn uống, số đo cơ thể) và hiển thị chúng theo cách có ý nghĩa là thách thức lớn. Đồng thời, phải đảm bảo dữ liệu người dùng được lưu trữ an toàn.",
    solutions: "Tôi đã xây dựng một cơ sở dữ liệu quan hệ với các bảng được thiết kế cẩn thận để lưu trữ dữ liệu người dùng và sử dụng Chart.js để tạo các biểu đồ trực quan. JWT và các phương pháp mã hóa được áp dụng để bảo vệ dữ liệu nhạy cảm của người dùng.",
    technologies: ["React Native", "Node.js", "Express", "MySQL", "Chart.js", "JWT"],
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com/fitness-app"
  }
];