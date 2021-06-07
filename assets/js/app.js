// tombol toggle navbar

let toggle = document.querySelector('.menu-toggle');
let nav = document.querySelector('nav ul');

toggle.addEventListener('click', function(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
});



// tampilkan artikel dengan loop + dom
let artikel = [
    {
        'judul':'10 Tahun Beroperasi, Netmarble Indonesia Resmi Tutup',
        'isi':'Dari ranah media sosial, Tiger Hong, CEO dari Netmarble Games Indonesia, mengatakan bahwa Ia akan meletakkan jabatannya sebagai CEO mulai Senin (31/5) ini. Di postingan Facebook-nya, Ia berkata bahwa Ia sangat berterima kasih kepada para mitra dan gamer yang telah membantunya populerkan sekian banyak gimnya selama sepuluh tahun terakhir.Ia mengatakan dalam awal statusnya bahwa kantor Netmarble Indonesia tutup mulai hari ini.<br><br> Beberapa komentar berdatangan yang mayoritas mengucapkan terima kasih atas jasa-jasa yang telah Ia lakukan selama ini. Hingga artikel ini terangkat, sebanyak 500 kali lebih postingan asli dari Tiger Hong terbagikan kepada publik.',
        'gambar': 'https://teknologiku.my.id/wp-content/uploads/2021/06/1622530163_10-Tahun-Beroperasi-Netmarble-Indonesia-Resmi-Tutup-750x375.jpg'
    },
    {
        'judul':'Akhirnya, Versi 1.6 Genshin Impact Hadirkan Kostum Barbara dan Jean!',
        'isi':'Dalam versi terbaru untuk Genshin ini, fitur busana terbaru akhirnya akan diimplementasikan dalam gim. Kali ini, dua heroine dari Mondstadt, Jean dan Barbara, akan bersenang-senang dengan masing-masing busana renang mereka! <br><br></br>Untuk kostum musim panas Jean, Sea Breeze Dandelion, akan tersedia setelah update versi telah selesai. Kostum tersebut dapat dibeli para periode eventnya berlangsung, yang dapat traveller beli seharga 1350 Gnosis Crystal. Setelah event berakhir, Kamu masih bisa membeli outfit tersebut jika belum keburu membelinya, yang akan dibanderol seharga 1680 Crystal.',
        'gambar':'https://teknologiku.my.id/wp-content/uploads/2021/05/1622262349_Akhirnya-Versi-16-Genshin-Impact-Hadirkan-Kostum-Barbara-dan-Jean-750x375.jpg'
    },
    {
        'judul':'Astaga! Violet Evergarden Ada “Live Action”-nya!',
        'isi':'Pada tanggal 9 April 2021 studio film ‘live action’ asal Jepang yaitu TMA tiada henti-hentinya untuk membuat karya “live action” yang sedang trending bagi kalangan otaku di sana. Pada hari tersebut TMA mengumumkan secara diam-diam lewat salah satu akun toko yang menjadi mitra dari studio TMA yaitu TMA&タマトイズ営業！(TMA & Tama Toys Eigyou) membocorkan salah satu karya cosplay berikutnya yang akan di-“live action” adalah Violet Evergarden.',
        'gambar':'https://teknologiku.my.id/wp-content/uploads/2021/04/Astaga-Violet-Evergarden-Ada-Live-Action-nya-TEKNOLOGIKU-484x375.png'
    },
    {
        'judul':'Free Fire Akan Jadikan Map Bermuda Permanen untuk Para Pemainnya!',
        'isi':'Nah, jika kalian merupakan salah satu pemain yang sangat menyukai map Bermuda (Map yang sebelumnya dapat dimainkan menjelang event yang disediakan oleh Free Fire), maka kalian tidk perlu takut, karena map tersebut akan dibuka secara permanen pada update kedepannya. Meski begitu, ada beberapa lokasi yang akan dirombak oleh pengembang, dimana mereka akan menghilangkan beberapa lokasi yang ada di Bermuda agar lebih menarik untuk dimainkan kedepannya.',
        'gambar':'https://teknologiku.my.id/wp-content/uploads/2021/04/1618216737_Free-Fire-Akan-Jadikan-Map-Bermuda-Permanen-untuk-Para-Pemainnya-1140x570.jpg'
    },
];

let content = document.querySelector('#content');
content.innerHTML = "";

for(let a of artikel){
    let row = document.createElement('article');
    row.className = "card";

    row.innerHTML = "<h2>"+ a.judul +"</h2>";
    row.innerHTML += '<img src="'+ a.gambar +'" class="featured-image">';
    row.innerHTML += "<p>"+ a.isi +"</p>";
    row.innerHTML += '<a class="more"></a>';

    content.appendChild(row);
}

// tombol more artikel di mobile

let moreList = document.querySelectorAll('.card');

for(let more of moreList){
    more.addEventListener('click', function(){
        more.classList.toggle('active');
    });
}