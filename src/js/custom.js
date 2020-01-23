let path = window.location.pathname.split("/").pop();

$(function () {

    addActiveClass();
    showProducts();
    productOnClick();
    changeProduct();

    $('.sort-btn').click(function () {
        $(this).addClass('active');
        $('.sort-btn').not(this).removeClass('active')
    });

    $('.numeric-minus').click(function () {
        let numericNumber = $('.numeric-number');
        let value = parseInt(numericNumber[0].innerHTML);
        if(value > 1)
            numericNumber[0].innerHTML = value - 1;
    });

    $('.numeric-plus').click(function () {
        let numericNumber = $('.numeric-number');
        let value = numericNumber[0].innerHTML;
        numericNumber[0].innerHTML = parseInt(value) + 1;
    });
});

addActiveClass = () => {
    $(`.nav-item a[href='${path}']`).parent().addClass("active");
};



showProducts = () => {
    switch(path){
        case "kompjutere.html":
            iterateProducts(produktet_data.kompjutere,"kompjutere");
            break;
        case "laptope.html":
            iterateProducts(produktet_data.laptope,"laptope");
            break;
        case "aksesore.html":
            iterateProducts(produktet_data.aksesore,"aksesore");
            break;
        case "index.html":
            iterateProducts(produktet_data.index,"index");
            break;
        case "celulare.html":
            iterateProducts(produktet_data.celulare,"celulare");
            break;
        case "televizore.html":
            iterateProducts(produktet_data.televizore,"televizore");
            break;
    }
};

productOnClick = () => {
    let produktet = document.querySelectorAll(".product");
    produktet.forEach((produkt) => {
        produkt.addEventListener("click",() => {
            let id = produkt.dataset.productId;
            let kategoria = produkt.dataset.kategoria;
            localStorage.setItem("productId",id);
            localStorage.setItem("kategoria",kategoria);
        })
    });
};

changeProduct = () => {
    if(path === "produkti.html") {
        let id = localStorage.getItem("productId");
        let kategoria = localStorage.getItem("kategoria");
        let product = null;
        if(kategoria === "index"){
            product = findProduct(produktet_data.index,id);
        } else if(kategoria === "kompjutere"){
            product = findProduct(produktet_data.kompjutere,id);
        } else if(kategoria === "laptope"){
            product = findProduct(produktet_data.laptope,id);
        } else if(kategoria === "aksesore"){
            product = findProduct(produktet_data.aksesore,id);
        } else if(kategoria === "celulare"){
            product = findProduct(produktet_data.celulare,id);
        } else if(kategoria === "televizore"){
            product = findProduct(produktet_data.televizore,id);
        }
        $(".product-details-img").attr("src",product.img);
        $(".name").html(product.name);
        $(".price").html(product.price);
        $(".desc").html(product.desc);
    }
};

findProduct = (data,id) => {
    return data.find((d) => d.id === id);
};

iterateProducts = (produktet,kategoria) => {
    let container = $('#products-row');
    produktet.map((produkti) => {
        let item = `<div class="col-md-4 mb-4">
                        <div class="card my-card-shadow product" data-product-id="${produkti.id}" data-kategoria="${kategoria}" style="width: 250px">
                            <a href="produkti.html">
                                <img class="card-img-top" src="${produkti.img}" alt="product-image"/>
                            </a>
                            <div class="card-body">
                                <p class="card-text">${produkti.name}</p>
                                <div class="d-flex align-items-center">
                                    <span class="card-text">${produkti.price}</span>
                                    <div class="ml-auto stars">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
        container.append(item);
    })
};


// Te dhenat e produkteve
var pershkrimet = {
    "kompjutere" : "Kompjuter me dizajn të qëndrueshëm që mban brenda vetes teknologjinë më të fundit në mënyrë që t'ju ndihmoj me menaxhimin e të dhënave në biznesin apo zyrën tuaj. Kompjuteri vjen i pajisur me procesorin 6 bërthamësh Intel Core i7-8700 që kombinohet me 16 memorie RAM.",
    "laptope" : "Laptopi vjen me dizajn unik dhe me përformancë dhe teknologjinë më të fundit. Baza e këtij laptopi është procesori 6 bërthamësh i cili përpunon dy procese në të njejtë kohë me frekuencë 2.2 Ghz deri në 4.1 Ghz me teknologjinë HyperThreading dhe formën TurboBoost dhe plotësohet me 16GB memorie DDR4.",
    "celulare" : "Ky telefon gjithmonë ka udhëhequr segmetin e celularëve SMART duke sjellur inovacionin dhe teknologjinë më të fundit, gjë që është dëshmuar me nëntë gjeneratë të serisë S. Tani, ajo sjell celularin e dhjetë të emëruar Samsung Galaxy S10 i cili është pajisur me ekran O-Infinity me madhësi 6.1\".",
    "televizore" : "Televizor i kualitetit të lartë i prodhuar nga kompania GoGEN me madhësinë 43\" dhe rezolucion Full HD 1920 x 1080. Koha e reagimit të televizorit është 5 ms, ka kënde të gjera të shikimit 178 ° / 178 ° dhe indeksi i cilësisë së imazhit është 200. Posedon toner me C / T / T2 me mbështetje HEVC H.265.",
    "aksesore" : "Kufjet profesionale Siberia 100 janë dizajnuar enkas për adhuruesit e video-lojërave. Sidoqoftë, pamja e tyre padyshim se mund të vlerësohet nga të gjithë. Çdo pjesë e këtyre kufjeve është ndërtuar për të siguruar profesionalizëm, ndërsa komfortin e mbajtjes së këtyre kufjeve."
};

var produktet_data = {
    "index": [
        {id:"0",img: 'src/img/produktet/kompjutere/pc1.jpg', name: 'Kompjuter MSI Gaming', price: '€999,99',desc : pershkrimet.kompjutere},
        {id:"1",img: 'src/img/produktet/laptope/laptop6.jpg', name: 'Laptop MSI GS73', price: '€2,175.50',desc : pershkrimet.laptope},
        {id:"2",img: 'src/img/produktet/celulare/telefon7.png', name: 'Oneplus 7', price: '€988.50',desc : pershkrimet.celulare},
        {id:"3",img: 'src/img/produktet/aksesore/hyperx.jpg', name: 'Kufje HyperX Alpha', price: '€98.50',desc : pershkrimet.aksesore},
        {id:"4",img: 'src/img/produktet/aksesore/logitech.jpg', name: 'Maus Logitech Master', price: '€99.50',desc : pershkrimet.aksesore},
        {id:"5",img: 'src/img/produktet/kompjutere/pc4.jpg', name: 'Kompjuter MSI Gaming', price: '€829,99',desc : pershkrimet.kompjutere},
        {id:"6",img: 'src/img/produktet/aksesore/beats.jpg', name: 'Speaker Beats', price: '€299.99',desc : pershkrimet.aksesore},
        {id:"7",img: 'src/img/produktet/televizore/tv.jpg', name: 'Televizor Sony', price: ' €569.50',desc : pershkrimet.televizore},
        {id:"8",img: 'src/img/produktet/celulare/telefon2.png', name: 'Samsung Galaxy S10', price: '€1,421.50',desc : pershkrimet.celulare},
        {id:"9",img: 'src/img/produktet/aksesore/synology.jpg', name: 'Router Synology', price: '€35.50',desc : pershkrimet.aksesore},
        {id:"10",img: 'src/img/produktet/laptope/laptop5.jpg', name: 'Laptop MSI GR85', price: '€2,999.99',desc : pershkrimet.laptope},
        {id:"11",img: 'src/img/produktet/aksesore/keyboard.jpg', name: 'Tastierë SteelSeries Apex', price: '€79.99',desc : pershkrimet.aksesore},
    ],
    "kompjutere": [
        {id:"0",img: 'src/img/produktet/kompjutere/pc.jpg', name: 'Kompjuter MSI Gaming', price: '999,99 €',desc : pershkrimet.kompjutere},
        {id:"1",img: 'src/img/produktet/kompjutere/pc1.jpg', name: 'Kompjuter MSI Gaming', price: '999,99 €',desc : pershkrimet.kompjutere},
        {id:"2",img: 'src/img/produktet/kompjutere/pc2.jpg', name: 'Kompjuter MSI Gaming', price: '999,99 €',desc : pershkrimet.kompjutere},
        {id:"3",img: 'src/img/produktet/kompjutere/pc3.jpg', name: 'Kompjuter MSI Gaming', price: '999,99 €',desc : pershkrimet.kompjutere},
        {id:"4",img: 'src/img/produktet/kompjutere/pc4.jpg', name: 'Kompjuter MSI Gaming', price: '999,99 €',desc : pershkrimet.kompjutere},
        {id:"5",img: 'src/img/produktet/kompjutere/pc5.jpg', name: 'Kompjuter MSI Gaming', price: '999,99 €',desc : pershkrimet.kompjutere},
        {id:"7",img: 'src/img/produktet/kompjutere/pc7.jpg', name: 'Kompjuter MSI Gaming', price: '999,99 €',desc : pershkrimet.kompjutere},
        {id:"8",img: 'src/img/produktet/kompjutere/pc.jpg', name: 'Kompjuter MSI Gaming', price: '999,99 €',desc : pershkrimet.kompjutere},
        {id:"1",img: 'src/img/produktet/kompjutere/pc1.jpg', name: 'Kompjuter MSI Gaming', price: '999,99 €',desc : pershkrimet.kompjutere},
    ],
    "laptope": [
        {id:"0",img: 'src/img/produktet/laptope/laptop.jpg', name: 'Laptop MSI GF75', price: '€1,287.50',desc : pershkrimet.laptope},
        {id:"1",img: 'src/img/produktet/laptope/laptop3.jpg', name: 'Laptop Razer Blade', price: '€1,529.50',desc : pershkrimet.laptope},
        {id:"2",img: 'src/img/produktet/laptope/laptop4.jpg', name: 'Laptop ASUS ROG', price: '€1,029.50',desc : pershkrimet.laptope},
        {id:"3",img: 'src/img/produktet/laptope/laptop5.jpg', name: 'Laptop MSI GR85', price: '€2,999.99',desc : pershkrimet.laptope},
        {id:"4",img: 'src/img/produktet/laptope/laptop6.jpg', name: 'Laptop MSI GS73', price: '€2,175.50',desc : pershkrimet.laptope},
        {id:"5",img: 'src/img/produktet/laptope/laptop2.jpg', name: 'Laptop Lenovo', price: '€899.99',desc : pershkrimet.laptope},
        {id:"6",img: 'src/img/produktet/laptope/laptop1.jpg', name: 'Laptop HP Pavilion', price: '€958.50',desc : pershkrimet.laptope},
        {id:"7",img: 'src/img/produktet/laptope/laptop7.jpg', name: 'Laptop Dell Latitude', price: '€847.50',desc : pershkrimet.laptope},
        {id:"8",img: 'src/img/produktet/laptope/laptop.jpg', name: 'Laptop MSI GF75', price: '€1,287.50',desc : pershkrimet.laptope},
    ],
    "aksesore": [
        {id:"0",img: 'src/img/produktet/aksesore/keyboard.jpg', name: 'Tastierë SteelSeries Apex', price: '€79.99',desc : pershkrimet.aksesore},
        {id:"1",img: 'src/img/produktet/aksesore/hyperx.jpg', name: 'Kufje HyperX Alpha', price: '€98.50',desc : pershkrimet.aksesore},
        {id:"2",img: 'src/img/produktet/aksesore/logitech.jpg', name: 'Maus Logitech Master', price: '€99.50',desc : pershkrimet.aksesore},
        {id:"3",img: 'src/img/produktet/aksesore/alienware.jpg', name: 'Monitor Dell Alienware', price: '€399.99',desc : pershkrimet.aksesore},
        {id:"4",img: 'src/img/produktet/aksesore/beats.jpg', name: 'Speaker Beats', price: '€299.99',desc : pershkrimet.aksesore},
        {id:"5",img: 'src/img/produktet/aksesore/mouse.jpeg', name: 'Maus SteelSeries Rival', price: '€59.99',desc : pershkrimet.aksesore},
        {id:"6",img: 'src/img/produktet/aksesore/siberia.jpg', name: 'Kufje SteelSeries Siberia', price: '€69.99',desc : pershkrimet.aksesore},
        {id:"7",img: 'src/img/produktet/aksesore/synology.jpg', name: 'Router Synology', price: '€35.50',desc : pershkrimet.aksesore},
        {id:"8",img: 'src/img/produktet/aksesore/keyboard.jpg', name: 'Tastierë SteelSeries Apex', price: '€999.99',desc : pershkrimet.aksesore},
    ],
    "televizore": [
        {id:"0",img: 'src/img/produktet/televizore/tv.jpg', name: 'Televizor Sony', price: ' €569.50',desc : pershkrimet.televizore},
        {id:"1",img: 'src/img/produktet/televizore/tv1.jpg', name: 'Televizor Philips', price: '€574.50',desc : pershkrimet.televizore},
        {id:"2",img: 'src/img/produktet/televizore/tv2.jpg', name: 'Televizor Panasonic', price: '€508.50',desc : pershkrimet.televizore},
        {id:"3",img: 'src/img/produktet/televizore/tv3.jpg', name: 'Televizor Samsung', price: '€828.50',desc : pershkrimet.televizore},
        {id:"4",img: 'src/img/produktet/televizore/tv4.jpg', name: 'Televizor Grundig', price: '€499,99',desc : pershkrimet.televizore},
        {id:"5",img: 'src/img/produktet/televizore/tv5.jpg', name: 'Televizor Samsung', price: '€1.299,99',desc : pershkrimet.televizore},
        {id:"6",img: 'src/img/produktet/televizore/tv6.jpg', name: 'Televizor Samsung', price: '€999,99',desc : pershkrimet.televizore},
        {id:"7",img: 'src/img/produktet/televizore/tv7.jpg', name: 'Televizor LG', price: '€999,99',desc : pershkrimet.televizore},
    ],
    "celulare": [
        {id:"0",img: 'src/img/produktet/celulare/telefon.jpg', name: 'Samsung Galaxy S8', price: '€507.50 ',desc : pershkrimet.celulare},
        {id:"1",img: 'src/img/produktet/celulare/telefon1.jpg', name: 'Samsung Galaxy S9', price: '€761.50',desc : pershkrimet.celulare},
        {id:"2",img: 'src/img/produktet/celulare/telefon2.png', name: 'Samsung Galaxy S10', price: '€1,421.50',desc : pershkrimet.celulare},
        {id:"3",img: 'src/img/produktet/celulare/telefon3.jpg', name: 'IPhone 8', price: '€777.50',desc : pershkrimet.celulare},
        {id:"4",img: 'src/img/produktet/celulare/telefon4.jpg', name: 'IPhone X', price: '€996.50',desc : pershkrimet.celulare},
        {id:"5",img: 'src/img/produktet/celulare/telefon5.jpg', name: 'Xiaomi Redmi Note 7', price: '€282.50',desc : pershkrimet.celulare},
        {id:"6",img: 'src/img/produktet/celulare/telefon6.jpg', name: 'Oneplus 6t', price: '€708.50',desc : pershkrimet.celulare},
        {id:"7",img: 'src/img/produktet/celulare/telefon7.png', name: 'Oneplus 7', price: '€988.50',desc : pershkrimet.celulare},
        {id:"8",img: 'src/img/produktet/celulare/telefon.jpg', name: 'Samsung Galaxy S8', price: '€507.50 ',desc : pershkrimet.celulare},
    ]
};














if (typeof jQuery === "undefined") { throw new Error("jQuery required"); }

+function ($) {
    'use strict';

    // SEARCHBAR CLASS DEFINITION
    // =========================

    var backdrop = '.searchbar-backdrop';
    var toggle   = '[data-toggle="searchbar"]';
    var Searchbar = function (element) {
        $(element).on('click.mr.searchbar', this.toggle);
    };

    Searchbar.VERSION = '1.0.0';

    Searchbar.prototype.toggle = function (e) {
        var $this = $(this);

        if ($this.is('.disabled, :disabled')) return;

        var $parent  = getParent($this);
        var isActive = $parent.hasClass('open') || (typeof isXS == 'function' && isXS());

        if (!isActive) {

            clearMenus();
            if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
                // if mobile we use a backdrop because click events don't delegate
                $('<div class="searchbar-backdrop"/>').insertAfter($(this)).on('click', clearMenus);
            }

            var relatedTarget = { relatedTarget: this };
            $parent.trigger(e = $.Event('show.mr.searchbar', relatedTarget));

            if (e.isDefaultPrevented()) return;
            e.preventDefault();

            $parent.find('input').trigger('focus');

            $parent
                .toggleClass('open')
                .trigger('shown.mr.searchbar', relatedTarget);

            return false;
        }
    };

    function clearMenus(e) {
        if (e && e.which === 3) return
        $(backdrop).remove();
        $(toggle).each(function () {
            var $parent = getParent($(this));
            var relatedTarget = { relatedTarget: this };
            if (!$parent.hasClass('open')) return;
            $parent.trigger(e = $.Event('hide.mr.searchbar', relatedTarget));
            if (e.isDefaultPrevented()) return;
            $parent.removeClass('open').trigger('hidden.mr.searchbar', relatedTarget);
        });
    }

    function getParent($this) {
        var selector = $this.attr('data-target');

        if (!selector) {
            return $this.parents('form');
        }

        var $parent = selector && $(selector);

        return $parent && $parent.length ? $parent : $this.parent();
    }


    // SEARCHBAR PLUGIN DEFINITION
    // ==========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var data  = $this.data('mr.searchbar');

            if (!data) $this.data('mr.searchbar', (data = new Searchbar(this)));
            if (typeof option == 'string') data[option].call($this);
        });
    }

    var old = $.fn.searchbar;

    $.fn.searchbar             = Plugin;
    $.fn.searchbar.Constructor = Searchbar;


    // SEARCHBAR NO CONFLICT
    // ====================

    $.fn.searchbar.noConflict = function () {
        $.fn.searchbar = old;
        return this;
    };


    // APPLY TO STANDARD SEARCHBAR ELEMENTS
    // ===================================

    $(document)
        .on('click.mr.searchbar.data-api', clearMenus)
        .on('click.mr.searchbar.data-api', '.searchbar', function (e) { e.stopPropagation(); })
        //.on('focus.mr.searchbar.data-api', toggle, Searchbar.prototype.toggle) // this causes the focus event to trigger twice
        .on('click.mr.searchbar.data-api', toggle, Searchbar.prototype.toggle);


}(jQuery);
