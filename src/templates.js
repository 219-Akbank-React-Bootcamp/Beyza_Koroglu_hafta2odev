const productTemplate = `
<tr>
  <td>{{product}}</td>
  <td>{{price}}</td>
  <td>{{stock}}</td>
  <td><button type="button" class="btn btn-link">Seçili kişiye sat</button></td>
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
  <td><button type="button" class="btn btn-link">Ürünleri gör</button></td>
  <td><button type="button" class="btn btn-link">Hesap hareketleri</button></td>
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
  <input name="price" placeholder="Fiyat giriniz" />
  <input name="stock" placeholder="Stok giriniz" />
  <br />
  <button onclick="javascript:addProduct()" type="button">Ekle</button>
</form>`;

const userFormTemplate = `
<form id="add_user">
  <input name="fullName" placeholder="İsim giriniz" />
  <input name="balance" placeholder="Bakiye giriniz" />
  <br />
  <button onclick="javascript:addUser()" type="button">Ekle</button>
</form>`;

const rootTemplate = `
<div id="first-row" class="row border">
  <div id="user_form" class="col-3 border"></div>
  <div class="col-6 border">Column</div>
  <div id="product_form" class="col-3 border"></div>
</div>
<div id="second-row" class="row border">
  <div id="user_list" class="col-3 border"></div>
  <div class="col-6 border">Column</div>
  <div id="product_list" class="col-3 border"></div>
</div>`;
