import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RoleAccess } from "../Utils/config";
import AuthContext from "../Utils/context";
import Wrapper from "../Utils/scrollToTop";
import AboutUs from "./AboutUs";
import Achievements from "./Achievements";
// import Admin from "./Admin";
// import AdminLogin from "./Admin/Auth/AdminLogin";
import Alumni from "./Alumni";
import Club from "./Community/Club";
import CompetitionTeam from "./Community/CompetitionTeam";
import ManagerialTeam from "./Community/ManagerialTeam";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Media from "./Media";
import NewBlog from "./Blog/CreateBlog";
import SIP from "./SIP";
import ProjectsList from "./SIP/Projects";
import NewProject from "./SIP/NewProject";
import Project from "./SIP/Project";
import OpenHouse from "./OpenHouse";
import Blog from "./Blog";
import MyBlog from "./Blog/MyBlog";
import ViewBlog from "./Blog/ViewBlog";

interface Probs {}

const AppRoutes = (probs: Probs) => {
  const { state } = useContext(AuthContext)!;

  if (state.isLoading) return null;

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clubs/:clubname" element={<Club />} />
          <Route
            path="/competition-teams/:teamname"
            element={<CompetitionTeam />}
          />
          <Route path="/managerial-team" element={<ManagerialTeam />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/open-house" element={<OpenHouse />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/my"
            element={
              RoleAccess.CreateBlogAccess.includes(state.user?.role!) ? (
                <MyBlog />
              ) : (
                <Navigate to="/blog" />
              )
            }
          />
          <Route path="/blog/:id" element={<ViewBlog />} />
          <Route
            path="/blog/new"
            element={
              RoleAccess.CreateBlogAccess.includes(state.user?.role!) ? (
                <NewBlog />
              ) : (
                <Navigate to="/blog" />
              )
            }
          />
          <Route path="/sip" element={<SIP />} />
          <Route path="/sip/projects" element={<ProjectsList />} />
          <Route path="/sip/projects/:id" element={<Project />} />
          <Route
            path="/sip/projects/add"
            element={
              RoleAccess.SIPAddProjectAccess.includes(state.user?.role) ? (
                <NewProject />
              ) : (
                <Navigate to="/sip" />
              )
            }
          />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* ADMIN */}
          {/* <Route
            path="/admin"
            element={
              RoleAccess.BlogAccess.includes(state.user?.role!) ? (
                <Admin />
              ) : (
                <Navigate to="/admin/sign-in" />
              )
            }
          />
          <Route
            path="/admin/blog"
            element={
              RoleAccess.BlogAccess.includes(state.user?.role!) ? (
                <Admin />
              ) : (
                <Navigate to="/admin/sign-in" />
              )
            }
          />
          <Route
            path="/admin/sign-in"
            element={
              RoleAccess.BlogAccess.includes(state.user?.role!) ? (
                <Navigate to="/admin" />
              ) : (
                <AdminLogin />
              )
            }
          />
          <Route
            path="/admin/sign-out"
            element={
              RoleAccess.BlogAccess.includes(state.user?.role!) ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/admin/sign-in" />
              )
            }
          /> */}

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
};

export default AppRoutes;
