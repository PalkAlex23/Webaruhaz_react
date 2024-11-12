import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FakeStore webáruház</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          {/* A publikus tartalom linkje */}
                        <Link to="/" className="nav-link text-decoration-none text-dark">Webáruház</Link>
        </li>
        <li class="nav-item">
          {/* Az admin oldal linkjetartalom linkje */}
                        <Link to="/admin" className="nav-link text-decoration-none text-dark">Admin felület</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <article>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
        <Outlet />
      </article>
    </>
  );
};

export default Layout;
