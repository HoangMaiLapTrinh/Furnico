<template>
    <div class="bg-highlight text-center">
        <div class="newletter d-flex align-items-center justify-content-center gap-3 py-4 flex-wrap">
            <div class="text-white h2 text-uppercase mb-0 mt-3 mb-3">
                NHẬN THÔNG BÁO
            </div>
            <div class="d-flex align-items-center gap-2">
                <input type="email" placeholder="Email" required class="form-control rounded-pill px-4 w-100 p-3"
                    style="min-width: 700px;" />
                <button class="btn rounded-pill border border-white fw-semibold border-2 p-3" style="min-width: 150px;">
                    GỬI NHẬN TIN
                </button>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.bg-highlight {
    background-color: #c14b4f;
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

.list-unstyled ul li {
    color: #333;
    font-size: 15px;
    cursor: pointer;
}

.list-unstyled ul li:hover {
    text-decoration: underline;
    color: #c14b4f;
}

</style>