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
    title: "Portfolio cá nhân",
    shortDescription: "Portfolio cá nhân được xây dựng bằng ReactJS và TailwindCSS.",
    fullDescription: "Portfolio cá nhân được xây dựng bằng ReactJS và TailwindCSS, giúp thể hiện các kỹ năng, dự án và thông tin liên hệ của tôi một cách chuyên nghiệp và hấp dẫn. Trang web này được thiết kế để đáp ứng trên nhiều thiết bị và sử dụng các hiệu ứng tương tác để tạo trải nghiệm người dùng tốt.",
    challenges: "Thách thức chính trong việc xây dựng portfolio là tạo ra một thiết kế độc đáo thu hút sự chú ý nhưng vẫn đảm bảo tính chuyên nghiệp. Việc tối ưu hóa hiệu suất trang web, đảm bảo khả năng tương thích trên nhiều thiết bị, và triển khai các hiệu ứng mượt mà không làm ảnh hưởng đến trải nghiệm người dùng là những vấn đề quan trọng cần giải quyết.",
    solutions: "Tôi đã sử dụng Tailwind CSS để xây dựng giao diện linh hoạt và dễ bảo trì, kết hợp với TypeScript để tăng cường tính mạnh mẽ của code. Các hooks của React được sử dụng để quản lý trạng thái và hiệu ứng, trong khi Intersection Observer API giúp tạo các hiệu ứng cuộn trang mượt mà. Chế độ giao diện sáng/tối được triển khai để tăng cường trải nghiệm người dùng và khả năng tiếp cận.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design", "Dark Mode"],
    image: "/public/portfolio_avatar_project.jpg",
    githubUrl: "https://github.com/hieuhuynh113/Portfolio",
    liveUrl: "https://portfolio.ntu271.vpsttt.vn/"
  },
  {
    title: "Website barber shop",
    shortDescription: "Website barber shop được xây dựng bằng Laravel PHP và MySQL.",
    fullDescription: "Website barber shop được xây dựng bằng Laravel PHP và MySQL, giúp quản lý các dịch vụ, đặt lịch cắt tóc, và tư vấn cho khách hàng một cách chuyên nghiệp và hiệu quả.",
    challenges: "Việc xây dựng một hệ thống thông báo thời gian thực mượt mà và quản lý hiệu quả luồng dữ liệu phức tạp giữa người dùng là những thách thức lớn. Hơn nữa, cần thiết kế một hệ thống có khả năng mở rộng để đáp ứng số lượng người dùng tăng trưởng.",
    solutions: "Tôi đã sử dụng Socket.io cho các kết nối thời gian thực và thiết kế một kiến trúc microservice để tăng khả năng mở rộng. MongoDB được chọn vì khả năng lưu trữ dữ liệu linh hoạt, và tôi đã tối ưu hóa truy vấn để cải thiện hiệu suất.",
    technologies: ["Laravel", "PHP", "MySQL", "XAMPP"],
    image: "/public/project_2.png",
    githubUrl: "https://github.com/hieuhuynh113/BarberShop",
    liveUrl: "https://ntu271.vpsttt.vn/"
  },
  {
    title: "Website Trung tâm Tiếng Nhật",
    shortDescription: "Website Trung tâm Tiếng Nhật được xây dựng bằng ReactJS và TailwindCSS.",
    fullDescription: "Một công cụ quản lý công việc toàn diện cho phép người dùng tạo, tổ chức và theo dõi nhiệm vụ theo dự án, thiết lập deadline, phân công việc cho các thành viên và theo dõi tiến độ dự án.",
    challenges: "Dự án Japanese Language Center đối mặt với nhiều thách thức kỹ thuật, bao gồm việc quản lý nhiều giao diện phức tạp với nhiều thành phần tương tác như khóa học, tin tức, và thông tin du học. Hệ thống phải hỗ trợ đa ngôn ngữ, xử lý đa dạng định dạng nội dung, và tối ưu hóa hiệu suất khi tải dữ liệu phong phú. Thêm vào đó, dự án cần đảm bảo khả năng tương thích với nhiều thiết bị và trình duyệt, đồng thời giải quyết các vấn đề phụ thuộc thư viện xung đột như TypeScript và i18next.",
    solutions: "Để giải quyết các thách thức trên, tôi đã sử dụng React với TypeScript làm nền tảng chính, kết hợp với Material UI để tạo giao diện nhất quán và đáp ứng. Hệ thống i18next được triển khai cho việc quốc tế hóa nội dung, cho phép chuyển đổi giữa các ngôn ngữ một cách liền mạch. Cấu trúc dự án được tổ chức theo mô hình thành phần, cho phép tái sử dụng và bảo trì dễ dàng. Vấn đề xung đột phụ thuộc được giải quyết bằng cách sử dụng cờ --legacy-peer-deps để đảm bảo tính tương thích, trong khi hiệu suất được tối ưu hóa thông qua tải nội dung theo yêu cầu và kỹ thuật phân chia mã.",
    technologies: ["React", "TypeScript", "JavaScript", "Material UI"],
    image: "/public/project_3.png",
    githubUrl: "https://github.com/hieuhuynh113/Japanese-Language-Center.git",
    liveUrl: "https://example.com/task-manager"
  },
  {
    title: "Landing page nhà hàng",
    shortDescription: "Đây là một trang landing page hiện đại cho nhà hàng cao cấp Saveur, được thiết kế để hiển thị các món ăn, dịch vụ và không gian của nhà hàng.",
    fullDescription: "Một ứng dụng dự báo thời tiết trực quan cung cấp thông tin thời tiết hiện tại và dự báo cho nhiều ngày tới dựa trên vị trí người dùng hoặc vị trí được tìm kiếm. Ứng dụng hiển thị nhiệt độ, độ ẩm, tốc độ gió và các điều kiện thời tiết khác.",
    challenges: "Dự án đối mặt với việc tạo trải nghiệm xem thực đơn trực quan mà không gây quá tải thông tin, thiết kế hệ thống đặt bàn vừa đơn giản vừa đầy đủ chức năng, tối ưu hiệu suất với nhiều hình ảnh chất lượng cao, và đảm bảo thiết kế responsive hoạt động tốt trên mọi thiết bị.",
    solutions: "Tôi đã triển khai giao diện lọc đa chiều với modal chi tiết món ăn, form đặt bàn trực quan với validation thời gian thực, áp dụng lazy loading và skeleton loading để cải thiện hiệu suất, đồng thời sử dụng Tailwind CSS để xây dựng giao diện responsive chất lượng cao. Kiến trúc component-based của React giúp code dễ bảo trì và mở rộng.",
    technologies: ["React", "TypeScript", "Tailwind CSS ", "Vite"],
    image: "/public/project_4.png",
    githubUrl: "https://github.com/hieuhuynh113/landing-page-restaurant",
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