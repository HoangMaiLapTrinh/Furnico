<template>
    <div class="footer">
        <div class="bg-highlight text-center">
            <div class="newletter d-flex align-items-center justify-content-center gap-5 py-4 flex-wrap">
                <div class="text-white h2 text-uppercase mb-0 mt-3 mb-3">
                    NHẬN THÔNG BÁO
                </div>
                <div class="d-flex align-items-center gap-2">
                    <input type="email" placeholder="Email" required class="form-control rounded-pill px-4 w-100 p-3" style="min-width: 700px;" />
                    <button class="btn rounded-pill border border-white fw-semibold border-2 p-3" style="min-width: 150px;">
                        GỬI NHẬN TIN
                    </button>
                </div>
            </div>
        </div>

        <div class="container py-5">
            <div class="row text-start">
                <!-- COMPANY INFO -->
                <div class="col-md-3 mb-4">
                    <div class="title-footer text-uppercase fw-bold mb-4">
                        CÔNG TY TNHH PHẦN MỀM NHÂN HÒA
                    </div>
                    <p class="mb-2">
                        <i class="fa-solid fa-building me-2"></i>
                        Tầng 4, Tòa nhà số 97 - 99 Láng Hạ, Đống Đa, Hà Nội (Tòa nhà
                        Petrowaco)
                    </p>
                    <p class="mb-2"><i class="fa-solid fa-phone me-2"></i> 0901191616</p>
                    <p class="mb-0">
                        <i class="fa-solid fa-envelope me-2"></i> contact@sm4s.vn
                    </p>
                </div>

                <!-- POLICY -->
                <div class="col-md-3 mb-4">
                    <div class="title-footer text-uppercase fw-bold mb-4">Chính Sách</div>
                    <ul class="list-unstyled lh-lg">
                        <li>Chính sách bảo mật</li>
                        <li>Chính sách vận chuyển</li>
                        <li>Chính sách bảo hành</li>
                        <li>Chính sách đổi hàng</li>
                    </ul>
                </div>

                <!-- HOW TO BUY -->
                <div class="col-md-3 mb-4">
                    <div class="title-footer text-uppercase fw-bold mb-4">
                        Cách Mua Hàng
                    </div>
                    <ul class="list-unstyled lh-lg">
                        <li>Trung tâm bảo hành</li>
                        <li>Chính sách hoàn tiền</li>
                        <li>Hướng dẫn đặt hàng</li>
                        <li>Liên hệ</li>
                    </ul>
                </div>

                <!-- FANPAGE -->
                <div class="col-md-3 mb-4">
                    <div class="title-footer text-uppercase fw-bold mb-4">Fanpage</div>
                    <div class="ratio ratio-4x3">
                        <iframe class="rounded border" style="border: none; overflow: hidden" scrolling="no"
                            frameborder="0" allowfullscreen="true"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fweb4s&tabs=timeline&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=912588869433315"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.bg-highlight {
    background-color: #d85f63;
}

/* Newsletter */
.newletter input::placeholder {
    color: #aaa;
    font-size: 15px;
}

.newletter input:focus {
    border: 2px solid white;
    box-shadow: none;
}

.btn {
    color: white;
}

/* Button hover */
.btn:hover {
    background-color: white;
    color: #c14b4f;
    border-color: white;
}

/* Footer text */
.title-footer {
    font-size: 16px;
    letter-spacing: 0.5px;
}

.footer ul li {
    color: #333;
    font-size: 15px;
    cursor: pointer;
}

.footer ul li:hover {
    text-decoration: underline;
    color: #c14b4f;
}
</style>
