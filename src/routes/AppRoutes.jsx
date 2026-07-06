import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Coaches from "../pages/Coaches";
import AboutUs from "../pages/About";
import FacilitiesPage from "../pages/Facilities";
import BMIPage from "../pages/BMI";
import SchedulePage from "../pages/Schedule";
import ReviewPage from "../pages/Review";
import GalleryPage from "../pages/Gallery";
import BlogPage from "../pages/Blog";
// import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="coaches" element={<Coaches />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="facilities" element={<FacilitiesPage />} />
        <Route path="bmi" element={<BMIPage />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="reviews" element={<ReviewPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;