function watch_animation(ele) {
    document.querySelector(".display-img img").src = ele;
}

function calculate_price() {
    let watch_price = document.getElementById('price').value;

    let watch_qty = document.getElementById('qty').value;

    let watch_discount = document.getElementById('dis').value;

    let watch_total = parseInt(watch_price * watch_qty);

    document.getElementById('sub-total').innerHTML = watch_total;

    let discount = parseInt(watch_total * watch_discount / 100);

    document.getElementById('discounted_amt').innerHTML = discount;

    let sub_total = parseInt(watch_total - discount);


    let tax_calc = parseInt(sub_total * 13 / 100);

    document.getElementById('tax').innerHTML = tax_calc;

    let final_tot = parseInt(sub_total + tax_calc);

    document.getElementById('total').innerHTML = final_tot;
}