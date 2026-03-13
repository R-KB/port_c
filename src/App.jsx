import { Component } from "react";
import { Outlet } from "react-router";
import Header from "./common/Header";
import Footer from './common/Footer';

export default function App() {

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}