<template>
  <div class="forgot-page py-4">
    <div class="forgot-card">
      <h2 class="text-center fw-bold mb-4">QUÊN MẬT KHẨU</h2>

      <!-- Box thông tin -->
      <div class="info-box">
        <div class="icon">
          <i class="fa-solid fa-envelope"></i>
        </div>
        <div>
          <strong>Khôi phục mật khẩu qua email</strong>
          <p class="small text-muted mb-0">
            Mã sẽ gửi qua email bạn đăng ký để thay đổi mật khẩu
          </p>
        </div>
        <div>
            <i class="fa-regular fa-circle-check"></i>
        </div>
      </div>

      <!-- Form -->
      <form class="mt-3">
        <input
          type="email"
          class="form-control mb-3"
          placeholder="Email *"
          required
        />
        <button type="submit" class="btn-submit">Xác nhận</button>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.forgot-page {
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.forgot-card {
  background-color: #fff;  
  padding: 40px 30px;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.info-box {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #e16b6b;
  border-radius: 6px;
  padding: 12px 15px;
  color: #333;
  background-color: #fff;
}

.info-box .icon {
  background-color: #e16b6b;
  color: white;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
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

@media (max-width: 576px) {
  .forgot-card {
    width: 90%;
    padding: 30px 20px;
  }
}
</style>
