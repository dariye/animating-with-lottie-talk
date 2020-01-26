import styled from "styled-components";
import lottie from "lottie-web/build/player/lottie_light";
import {useState, useRef, useEffect} from 'react'
import { useTransition, useSpring, animated, config } from "react-spring";

import ContentLoader from "react-content-loader";
import TransitionDemo from "./transition-demo.jsx";
import SupplementsDemo from "./supplements-demo.jsx";
import FeedbackDemo from "./feedback-demo.jsx";
import DecorativeDemo from "./decorative-demo.jsx";
import DemonstrationsDemo from "./demonstrations-demo.jsx";
import Lottie from "./lottie.jsx";

const getAnimationData = async (name) => await import(
  /* webpackChunkName: "Lottie" */ `./animations/${name}.json`
);

const lottieExample = import('./animations/pop-one.json')

const scope = {
  getAnimationData,
  lottieExample,
  useTransition,
  useSpring,
  useRef,
  useEffect,
  useState,
  animated,
  config,
  TransitionDemo,
  SupplementsDemo,
  FeedbackDemo,
  DemonstrationsDemo,
  DecorativeDemo,
  Lottie,
  lottie,
  styled,
  ContentLoader
};

export default scope;