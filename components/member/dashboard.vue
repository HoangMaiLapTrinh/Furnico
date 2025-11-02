<template>
  <div class="profile-wrapper py-4">
    <!-- SIDEBAR -->
    <aside class="sidebar border-end bg-white">
      <div class="text-center p-4">
        <!-- Avatar -->
        <div class="position-relative d-inline-block">
          <div class="rounded-circle bg-secondary" style="width: 100px; height: 100px"></div>
          <button
            class="btn btn-sm btn-dark position-absolute bottom-0 start-50 translate-middle-x px-3 py-0"
            style="font-size: 12px"
          >
            Sửa
          </button>
        </div>
        <h6 class="mt-3 fw-semibold mb-0">Hoang Mai</h6>
      </div>

      <!-- MENU -->
      <div class="px-4">
        <p class="fw-semibold text-uppercase small mb-3">Tài khoản của tôi</p>
        <ul class="list-unstyled">
          <li>
            <button class="btn w-100 text-start py-2 active-item" type="button">
              <i class="fa-regular fa-user me-2"></i> Thông tin cá nhân
            </button>
          </li>
          <li>
            <button class="btn w-100 text-start py-2" type="button">
              <i class="fa-solid fa-map-location-dot me-2"></i> Địa chỉ nhận hàng
            </button>
          </li>
          <li>
            <button class="btn w-100 text-start py-2" type="button">
              <i class="fa-solid fa-clipboard-list me-3"></i> Đơn hàng
            </button>
          </li>
        </ul>

        <button class="btn btn-dark w-100 mb-3">Đăng xuất</button>
      </div>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="main-content border bg-white p-4">
      <h5 class="fw-bold mb-1">Hồ sơ của tôi</h5>
      <p class="text-muted small mb-4">
        Quản lý thông tin hồ sơ để bảo mật tài khoản
      </p>

      <!-- INFO TABLE -->
      <div class="info-item border-bottom d-flex justify-content-between p-3">
        <span>Tên</span>
        <span class="fw-semibold">Hoang Mai</span>
      </div>
      <div class="info-item border-bottom d-flex justify-content-between p-3">
        <span>Email</span>
        <span class="fw-semibold">hoangmai020603@gmail.com</span>
      </div>
      <div class="info-item border-bottom d-flex justify-content-between p-3">
        <span>Số điện thoại</span>
        <span class="fw-semibold">0971172603</span>
      </div>
      <div class="info-item d-flex justify-content-between p-3">
        <span>Mã khách hàng</span>
        <span class="fw-semibold">CUS168574023</span>
      </div>

      <!-- BUTTONS -->
      <div class="mt-4 d-flex gap-2 justify-content-end">
        <button class="btn btn-dark px-4">Thay đổi mật khẩu</button>
        <button class="btn btn-dark px-4">Sửa thông tin</button>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Dàn layout chính bằng flex */
.profile-wrapper {
  display: flex;
  align-items: stretch;
  gap: 1rem;
}

/* Sidebar chiếm 25% */
.sidebar {
  flex: 0 0 25%;
  max-width: 300px;
  border-color: #e5e5e5 !important;
}

/* Phần nội dung chính chiếm phần còn lại */
.main-content {
  flex: 1;
}

/* Mục menu đang chọn */
.active-item {
  background-color: #f8f9fa;
  color: #000;
  border-left: 3px solid #000;
  font-weight: 500;
}

/* Responsive cho mobile */
@media (max-width: 991px) {
  .profile-wrapper {
    flex-direction: column;
  }
  .sidebar {
    max-width: 100%;
    border-right: none;
    border-bottom: 1px solid #e5e5e5;
  }
}
</style>
