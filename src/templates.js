const TransferTemplate = `
<div id="money_transfer" class="border">
  <form id="money_transfer_form">
    <select name="moneySender" id="moneySender">
      <option value="ydfg">Gönderen</option>
    </select>
    <input
      id="transferMoney"
      name="transferMoney"
      type="number"
      placeholder="Gönderilecek miktar"
    />
    <select id="moneyReceiver" name="moneyReceiver">
      <option value="">Alıcı</option>
    </select>
    <button onclick="javascript:moneyTransfer()" type="button">
      Gönder
    </button>
  </form>
</div>
<div id="product_transfer" class="border">
  <form id="product_transfer_form">
    <select
      id="productSender"
      name="productSender"
    >
      <option value="">Gönderen</option>
    </select>
    <select id="transferProduct" name="transferProduct">
      <option value="">Ürünler</option>
    </select>
    <select id="productReceiver" name="productReceiver">
      <option value="">Alıcı</option>
    </select>
    <button onclick="javascript:productTransfer()" type="button">
      Gönder
    </button>
  </form>
</div>`;

const userOneProductTemplate = `
<tr>
  <td>{{product}}</td>
  <td>{{quantity}}</td>
</tr>`;

const userProductsTemplate = `
<thead>
  <tr>
    <th scope="col">Ürün</th>
    <th scope="col">Adet</th>
  </tr>
</thead>
<tbody id="userProducts">

</tbody>`;

const userDetailTemplate = `
<div id="user_detail" class="border">
  <h4>{{fullName}} {{category}}</h4><button id="detail_close_button">X</button>
</div>`;

const productTemplate = `
<tr>
  <td>{{product}}</td>
  <td>{{price}}</td>
  <td>{{stock}}</td>
</tr>`;

const productListTemplate = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">Ürün</th>
      <th scope="col">Fiyat</th>
      <th scope="col">Stok</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody id="products">

  </tbody>
</table>`;

const userTemplate = `
<tr>
  <td>{{fullName}}</td>
  <td>{{balance}}</td>
  <td><button onclick={javascript:changeDetailPage("products")} type="button" class="btn btn-link">Ürünleri gör</button></td>
  <td><button onclick={javascript:changeDetailPage("activities")} type="button" class="btn btn-link">Hesap hareketleri</button></td>
</tr>`;

const userListTemplate = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">İsim</th>
      <th scope="col">Bakiye</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody id="users">

  </tbody>
</table>`;

const productFormTemplate = `
<form id="add_product">
  <input name="product" placeholder="Ürün giriniz" />
  <input name="price" type="number" placeholder="Fiyat giriniz" />
  <input name="stock" type="number" placeholder="Stok giriniz" />
  <br />
  <button onclick="javascript:addProduct()" type="button">Ekle</button>
</form>`;

const userFormTemplate = `
<form id="add_user">
  <input name="fullName" placeholder="İsim giriniz" />
  <input name="balance" type="number" placeholder="Bakiye giriniz" />
  <br />
  <button onclick="javascript:addUser()" type="button">Ekle</button>
</form>`;

const rootTemplate = `
<div id="first-row" class="row border">
  <div id="user_form" class="col-3 border"></div>
  <div id="trasfer_cover" class="col-6 border">Column</div>
  <div id="product_form" class="col-3 border"></div>
</div>
<div id="second-row" class="row border">
  <div id="user_list" class="col-3 border">Kayıtlı bir kullanıcı yok.</div>
  <div id="user_detail_cover" class="col-6 border">Bilgilerini görmek istediğiniz kişiyi seçiniz.</div>
  <div id="product_list" class="col-3 border">Kayıtlı bir ürün yok.</div>
</div>`;
