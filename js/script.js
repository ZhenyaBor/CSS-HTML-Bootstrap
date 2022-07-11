const banners = [
    document.querySelector('body>div:first-child'),
    document.querySelector('.cbalink'),
    document.querySelector('.cumf_bt_form_wrapper')
]
banners.forEach(elem => document.body.removeChild(elem))
