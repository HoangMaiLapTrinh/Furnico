<template>
  <div class="register-page py-4">
    <div class="register-wrapper border rounded-2">
      <h2 class="text-center fw-bold mb-4">ĐĂNG KÝ</h2>

      <form class="register-form">
        <div class="form-row">
          <input type="text" class="form-control" placeholder="Họ và tên *" />
          <input type="text" class="form-control" placeholder="Tài khoản *" />
        </div>

        <div class="form-row">
          <input type="password" class="form-control" placeholder="Mật khẩu *" />
          <input
            type="password"
            class="form-control"
            placeholder="Xác nhận mật khẩu *"
          />
        </div>

        <div class="form-row">
          <input type="email" class="form-control" placeholder="Email *" />
          <input type="text" class="form-control" placeholder="Số điện thoại *" />
        </div>

        <div class="form-row">
          <select class="form-select">
            <option>-- Tỉnh thành --</option>
          </select>
          <select class="form-select">
            <option>-- Quận huyện --</option>
          </select>
        </div>

        <div class="form-row">
          <select class="form-select">
            <option>-- Phường xã --</option>
          </select>
          <input type="text" class="form-control" placeholder="Địa chỉ *" />
        </div>

        <button type="submit" class="btn-submit mt-3">Đăng ký</button>

        <div class="text-center mt-3">
          <small>
            Bạn đã có tài khoản?
            <a href="#" class="fw-bold">Đăng nhập</a>
          </small>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.register-wrapper {
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 40px 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.register-form {
  display: grid;
  gap: 1rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.form-control,
.form-select {
  flex: 1;
  border-radius: 0;
  border: 1px solid #ccc;
  padding: 10px 12px;
  font-size: 14px;
}
.form-select {
  background-color: #f3f3f3;
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

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
}
</style>
