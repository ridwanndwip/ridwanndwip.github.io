import React from 'react';
import '../../style/main.scss'
import demo from '../../img/demo.png';

class Work extends React.Component{
    render(){
        return(
            <div className="container_work" id="works" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div class="title">
                    <h2 className="title_number"> 02 </h2>
                    <h4 className="title_name"> Works </h4>
                </div>
                <div className="works">
                    <img src={demo} alt="Demo Pict"/>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem odio ullam minus ut ex quae. </p>
                    <div className="works_link">
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                    </div>
                </div>
                <div className="works">
                    <img src={demo} alt="Demo Pict"/>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem odio ullam minus ut ex quae. </p>
                    <div className="works_link">
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                    </div>
                </div>
                <div className="cards_works">
                    <div class="card">
                        <h5>Card #1</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus eligendi minus numquam error quaerat officiis magni sapiente nihil perferendis assumenda?</p>
                        <div className="works_link">
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                    </div>
                    </div>
                    <div class="card">
                        <h5>Card #1</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus eligendi minus numquam error quaerat officiis magni sapiente nihil perferendis assumenda?</p>
                        <div className="works_link">
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                    </div>
                    </div>
                    <div class="card">
                        <h5>Card #1</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus eligendi minus numquam error quaerat officiis magni sapiente nihil perferendis assumenda?</p>
                        <div className="works_link">
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                    </div>
                    </div>
                    <div class="card">
                        <h5>Card #1</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus eligendi minus numquam error quaerat officiis magni sapiente nihil perferendis assumenda?</p>
                        <div className="works_link">
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                    </div>
                    </div>
                    <div class="card">
                        <h5>Card #1</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus eligendi minus numquam error quaerat officiis magni sapiente nihil perferendis assumenda?</p>
                        <div className="works_link">
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                    </div>
                    </div>
                    <div class="card">
                        <h5>Card #1</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus eligendi minus numquam error quaerat officiis magni sapiente nihil perferendis assumenda?</p>
                        <div className="works_link">
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                        <span><svg viewBox="5 0 512 512" xmlns="http://www.w3.org/2000/svg" height="17" width="17"><path d="M437.02,74.981C388.668,26.629,324.381,0,256,0S123.334,26.629,74.981,74.981C26.63,123.333,0.001,187.62,0.001,256 s26.629,132.667,74.981,181.02C123.334,485.371,187.621,512,256.001,512c42.42,0,84.448-10.595,121.539-30.638 c7.483-4.043,10.271-13.387,6.227-20.871c-4.042-7.482-13.385-10.27-20.87-6.227c-32.609,17.621-69.573,26.934-106.896,26.934 C131.826,481.198,30.802,380.175,30.802,256S131.826,30.802,256,30.802c124.175,0,225.198,101.024,225.198,225.198 c0,29.389-7.139,64.356-13.546,77.359c-5.682,11.53-21.78,27.768-39.78,27.768c-23.299,0-42.255-18.955-42.255-42.254V156.484 c0-8.505-6.896-15.401-15.401-15.401s-15.401,6.895-15.401,15.401v15.736c-23.794-28.021-59.26-45.837-98.815-45.837 c-71.47,0-129.617,58.146-129.617,129.617c0,71.47,58.145,129.617,129.617,129.617c40.84,0,77.322-18.991,101.097-48.601 c8.089,31.535,36.752,54.912,70.774,54.912c29.711,0,56.402-22.615,67.41-44.954c9.375-19.024,16.718-58.984,16.718-90.973 C512,187.62,485.371,123.333,437.02,74.981z M256,354.815c-54.486,0-98.815-44.328-98.815-98.815 c0-54.487,44.328-98.815,98.815-98.815c54.487,0,98.815,44.328,98.815,98.815C354.815,310.487,310.487,354.815,256,354.815z"/> </svg></span>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work;