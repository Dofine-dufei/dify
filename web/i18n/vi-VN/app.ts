const translation = {
  createApp: 'TẠO ỨNG DỤNG',
  types: {
    all: 'Tất cả',
    chatbot: 'Chatbot',
    agent: 'Tác nhân',
    workflow: 'Quy trình',
    completion: 'Hoàn thành',
  },
  duplicate: 'Sao chép',
  duplicateTitle: 'Sao chép ứng dụng',
  export: 'Xuất DSL',
  exportFailed: 'Xuất DSL thất bại.',
  importDSL: 'Nhập tệp DSL',
  createFromConfigFile: 'Tạo từ tệp DSL',
  deleteAppConfirmTitle: 'Xóa ứng dụng này?',
  deleteAppConfirmContent:
    'Việc xóa ứng dụng là không thể hoàn tác. Người dùng sẽ không thể truy cập vào ứng dụng của bạn nữa và tất cả cấu hình cũng như nhật ký nhắc sẽ bị xóa vĩnh viễn.',
  appDeleted: 'Ứng dụng đã bị xóa',
  appDeleteFailed: 'Không thể xóa ứng dụng',
  join: 'Tham gia cộng đồng',
  communityIntro:
    'Thảo luận với các thành viên nhóm, người đóng góp và nhà phát triển trên các kênh khác nhau.',
  roadmap: 'Xem lộ trình của chúng tôi',
  newApp: {
    startFromBlank: 'Tạo mới',
    startFromTemplate: 'Tạo từ mẫu',
    captionAppType: 'Bạn muốn tạo loại ứng dụng nào?',
    chatbotDescription: 'Xây dựng một ứng dụng trò chuyện. Ứng dụng này sử dụng định dạng hỏi đáp, cho phép nhiều vòng trò chuyện liên tục.',
    completionDescription: 'Xây dựng một ứng dụng tạo văn bản chất lượng cao dựa trên gợi ý, như tạo bài viết, tóm tắt, dịch thuật và nhiều hơn nữa.',
    completionWarning: 'Loại ứng dụng này sẽ không được hỗ trợ trong tương lai.',
    agentDescription: 'Xây dựng một tác nhân thông minh có thể tự động chọn công cụ để hoàn thành các nhiệm vụ',
    workflowDescription: 'Xây dựng một ứng dụng tạo văn bản chất lượng cao dựa trên quy trình làm việc với mức độ tùy chỉnh cao. Phù hợp cho người dùng có kinh nghiệm.',
    workflowWarning: 'Hiện đang trong phiên bản beta',
    chatbotType: 'Phương pháp quản lý Chatbot',
    basic: 'Cơ bản',
    basicTip: 'Dành cho người mới bắt đầu, có thể chuyển sang Chatflow sau này',
    basicFor: 'DÀNH CHO NGƯỜI MỚI BẮT ĐẦU',
    basicDescription: 'Quản lý cơ bản cho phép quản lý ứng dụng Chatbot bằng cách sử dụng các cài đặt đơn giản, không cần sửa đổi các lời nhắc tích hợp sẵn. Phù hợp cho người mới bắt đầu.',
    advanced: 'Chatflow',
    advancedFor: 'Dành cho người dùng có kinh nghiệm',
    advancedDescription: 'Quản lý Chatbot dưới dạng các quy trình làm việc, cung cấp mức độ tùy chỉnh cao, bao gồm khả năng chỉnh sửa các lời nhắc tích hợp sẵn. Phù hợp cho người dùng có kinh nghiệm.',
    captionName: 'Biểu tượng và tên ứng dụng',
    appNamePlaceholder: 'Đặt tên cho ứng dụng của bạn',
    captionDescription: 'Mô tả',
    appDescriptionPlaceholder: 'Nhập mô tả của ứng dụng',
    useTemplate: 'Sử dụng mẫu này',
    previewDemo: 'Xem trước demo',
    chatApp: 'Trợ lý',
    chatAppIntro:
      'Tôi muốn xây dựng một ứng dụng trò chuyện. Ứng dụng này sử dụng định dạng hỏi đáp, cho phép nhiều vòng trò chuyện liên tục.',
    agentAssistant: 'Trợ lý tác nhân mới',
    completeApp: 'Máy tạo văn bản',
    completeAppIntro:
      'Tôi muốn tạo một ứng dụng tạo văn bản chất lượng cao dựa trên gợi ý, như tạo bài viết, tóm tắt, dịch thuật và nhiều hơn nữa.',
    showTemplates: 'Tôi muốn chọn từ mẫu',
    hideTemplates: 'Quay lại chế độ lựa chọn',
    Create: 'Tạo',
    Cancel: 'Hủy',
    nameNotEmpty: 'Tên không được để trống',
    appTemplateNotSelected: 'Vui lòng chọn một mẫu',
    appTypeRequired: 'Vui lòng chọn loại ứng dụng',
    appCreated: 'Ứng dụng đã được tạo',
    appCreateFailed: 'Không thể tạo ứng dụng',
  },
  editApp: 'Chỉnh sửa thông tin',
  editAppTitle: 'Chỉnh sửa thông tin ứng dụng',
  editDone: 'Thông tin ứng dụng đã được cập nhật',
  editFailed: 'Không thể cập nhật thông tin ứng dụng',
  emoji: {
    ok: 'Đồng ý',
    cancel: 'Hủy',
  },
  switch: 'Chuyển sang quản lý quy trình',
  switchTipStart: 'Một bản sao ứng dụng mới sẽ được tạo và chuyển sang quản lý quy trình. Bản sao mới sẽ ',
  switchTip: 'không thể',
  switchTipEnd: ' chuyển lại quản lý cơ bản.',
  switchLabel: 'Bản sao ứng dụng sẽ được tạo',
  removeOriginal: 'Xóa ứng dụng gốc',
  switchStart: 'Bắt đầu chuyển',
  typeSelector: {
    all: 'Tất cả loại',
    chatbot: 'Chatbot',
    agent: 'Tác nhân',
    workflow: 'Quy trình',
    completion: 'Hoàn thành',
  },
  tracing: {
    title: 'Theo dõi hiệu suất ứng dụng',
    description: 'Cấu hình nhà cung cấp LLMOps bên thứ ba và theo dõi hiệu suất ứng dụng.',
    config: 'Cấu hình',
    collapse: 'Thu gọn',
    expand: 'Mở rộng',
    tracing: 'Theo dõi',
    disabled: 'Đã tắt',
    disabledTip: 'Vui lòng cấu hình nhà cung cấp trước',
    enabled: 'Đang hoạt động',
    tracingDescription: 'Ghi lại toàn bộ ngữ cảnh thực thi ứng dụng, bao gồm các cuộc gọi LLM, ngữ cảnh, lời nhắc, yêu cầu HTTP và nhiều hơn nữa, đến một nền tảng theo dõi của bên thứ ba.',
    configProviderTitle: {
      configured: 'Đã cấu hình',
      notConfigured: 'Cấu hình nhà cung cấp để bật theo dõi',
      moreProvider: 'Thêm nhà cung cấp',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'Nền tảng phát triển tất cả trong một cho mọi bước của vòng đời ứng dụng được hỗ trợ bởi LLM.',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'Theo dõi, đánh giá, quản lý lời nhắc và số liệu để gỡ lỗi và cải thiện ứng dụng LLM của bạn.',
    },
    inUse: 'Đang sử dụng',
    configProvider: {
      title: 'Cấu hình ',
      placeholder: 'Nhập {{key}} của bạn',
      project: 'Dự án',
      publicKey: 'Khóa công khai',
      secretKey: 'Khóa bí mật',
      viewDocsLink: 'Xem tài liệu {{key}}',
      removeConfirmTitle: 'Xóa cấu hình {{key}}?',
      removeConfirmContent: 'Cấu hình hiện tại đang được sử dụng, việc xóa nó sẽ tắt tính năng Theo dõi.',
    },
  },
}

export default translation
