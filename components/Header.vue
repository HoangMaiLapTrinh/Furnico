<template>
  <header class="bg-white d-flex justify-content-center gap-5">
    <div class="d-flex align-items-center">
      <div class="logo px-5 me-5">
        <img src="https://cdn3713.cdn-template-4s.com/media/logo/demo-store-logo.webp" alt="Furnicro Logo" />
      </div>
      <div class="ms-5">
        <div class="container ms-5">
          <div class="d-flex align-items-center justify-content-end py-2">
            <div class="search-bar d-flex pe-3">
              <input type="text" class="form-control rounded-0" placeholder="Từ khóa tìm kiếm" />
              <button class="btn btn-dark rounded-0">
                <i class="bi bi-search"></i>
              </button>
            </div>

            <div class="d-flex align-items-center gap-3">
              <div class="dropdown border-start ps-3 dropdown-hover">
                <button class="btn btn-link text-dark text-decoration-none d-flex align-items-center" type="button">
                  <i class="fa-solid fa-flag me-2"></i>
                  Tiếng Việt
                </button>
                <ul class="dropdown-menu shadow-sm animate-slide">
                  <li><a class="dropdown-item" href="#">Tiếng Việt</a></li>
                  <li><a class="dropdown-item" href="#">English</a></li>
                </ul>
              </div>

              <div class="dropdown ps-3 dropdown-hover">
                <button class="btn btn-link text-dark text-decoration-none d-flex align-items-center" type="button">
                  <i class="fa-solid fa-dollar-sign me-2"></i>
                  Việt Nam đồng
                </button>
                <ul class="dropdown-menu shadow-sm animate-slide">
                  <li><a class="dropdown-item" href="#">Việt nam đồng</a></li>
                  <li><a class="dropdown-item" href="#">United States Dollar</a></li>
                  <li><a class="dropdown-item" href="#">Yên Nhật</a></li>
                  <li><a class="dropdown-item" href="#">Korea Won</a></li>
                  <li><a class="dropdown-item" href="#">Nhân dân tệ</a></li>
                </ul>
              </div>

              <div class="d-flex align-items-center border-start ps-3">
                <div class="rounded-circle bg-secondary me-2" style="width: 30px; height: 30px"></div>
                <div>
                  <div class="small text-muted">Tài khoản</div>
                  <div class="fw-semibold">Hoang Mai</div>
                </div>
              </div>
            </div>
          </div>

          <nav class="">
            <div class="d-flex align-items-center justify-content-end py-2">
              <!-- Menu -->
              <ul class="nav fw-semibold small mb-0 me-5 gap-3">
                <li class="nav-item">
                  <a href="/" class="nav-link text-dark px-2">Trang Chủ</a>
                </li>
                <li class="nav-item">
                  <a href="/noi-that" class="nav-link text-dark px-2">Nội Thất</a>
                </li>
                <li class="nav-item">
                  <a href="/dong-ho" class="nav-link text-dark px-2">Đồng Hồ</a>
                </li>
                <li class="nav-item">
                  <a href="/chieu-sang" class="nav-link text-dark px-2">Chiếu Sáng</a>
                </li>
                <li class="nav-item">
                  <a href="/phu-kien" class="nav-link text-dark px-2">Phụ Kiện</a>
                </li>
                <li class="nav-item">
                  <a href="/tin-tuc" class="nav-link text-dark px-2">Tin Tức</a>
                </li>
                <li class="nav-item">
                  <a href="/lien-he" class="nav-link text-dark px-2">Liên Hệ</a>
                </li>
              </ul>

              <div class="border-start ps-4 ms-5">
                <div class="d-flex align-items-center gap-4">
                  <div class="position-relative">
                    <i class="fa-solid fa-basket-shopping fs-5 icon"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style="font-size: 10px">0</span>
                  </div>
                  <div class="position-relative">
                    <i class="fa-solid fa-heart fs-5 icon"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style="font-size: 10px">0</span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.search-bar input {
  border: 1px solid #ddd;
  border-right: none;
}

.search-bar input:focus {
  box-shadow: none;
  border-color: #000;
}

.nav-link:hover {
  color: #dc3545 !important;
}

.logo {
  text-align: center;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-hover:hover .dropdown-menu {
  display: block;
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
}

.animate-slide {
  display: block;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition: all 0.25s ease;
}

.dropdown-menu {
  border-radius: 4px;
  font-size: 14px;
  border: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
  color: #c14b4f;
}

.icon:hover {
  color: #c14b4f;
  cursor: pointer;
}
</style>
