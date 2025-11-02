<template>
  <div class="login-page py-5">
    <div class="login-card p-5">
      <h2 class="text-center fw-bold mb-4">ĐĂNG NHẬP</h2>

      <!-- Social login -->
      <div class="d-flex gap-2 justify-content-center mb-3">
        <button class="btn-social">
          <i class="fa-brands fa-google me-2"></i>
          Đăng nhập google
        </button>
        <button class="btn-social">
          <i class="fa-brands fa-facebook-f me-2"></i>
          Đăng nhập facebook
        </button>
      </div>

      <hr class="divider" />
      <p class="text-center small text-muted mb-3">Hoặc tài khoản</p>

      <!-- Form -->
      <form class="login-form">
        <input
          type="text"
          placeholder="Tài khoản"
          class="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          class="form-control mb-2"
        />
        <div class="text-start mb-3">
          <a href="/member/forgot-password" class="text-muted small">Quên mật khẩu ?</a>
        </div>
        <button type="submit" class="btn-submit">Đăng nhập</button>
      </form>

      <div class="text-start mt-3">
        <a href="/member/register" class="register-link fw-bold">ĐĂNG KÝ NGAY</a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.login-page {
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
}

.btn-social {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  transition: 0.3s;
}

.btn-social:hover {
  background-color: #222;
}

.divider {
  border: 0;
  border-top: 1px solid #000;
  margin-top: 10px;
  margin-bottom: 0;
  width: 100%;
}

.form-control {
  border: 1px solid #ccc;
  border-radius: 0;
  font-size: 14px;
  padding: 10px;
}

.btn-submit {
  width: 100%;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-submit:hover {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
}

.register-link {
  color: #d85f63;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
}

.register-link:hover {
  color: #a94448;
  text-decoration: underline;
}
</style>
