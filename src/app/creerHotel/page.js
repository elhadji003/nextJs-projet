"use client"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CreerHotel = () => {
    return (
        <>
        <div className="bg-neutral-900 h-full flex flex-col items-center justify-center py-24 sm:py-26 ">
            <div className="w-full my-5 max-w-xl bg-white shadow-md rounded px-8 pt-3 pb-8 mb-4 p-5">
              <div className="header flex gap-3 p-3 border-slate-800" style={{borderBottom: "dotted", borderColor: "gray"}}>
                <span><FontAwesomeIcon icon={faArrowLeft}/></span>
                <span className="max-[567px]:text-center">Créer un nouveau hôtel</span>
              </div>

              <form className="my-4">
                <div className="flex-1 md:flex items-center justify-center gap-4">
                  <div className="left">
                      <div className="mb-4">
                        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="text">
                            Nom de l'hotel
                        </label>
                        <input 
                            className="appearance-none max-[567px]:w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="text" 
                            type="text" 
                            placeholder="CAP Marniane"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input 
                            className="appearance-none max-[567px]:w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="email" 
                            placeholder="Email"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="number">
                            Prix par nuit
                        </label>
                        <input 
                            className="appearance-none max-[567px]:w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="number" 
                            type="number" 
                            placeholder="125.000 XOF"
                        />
                      </div>
                    </div>
                    <div className="right">
                      <div className="mb-4">
                        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="text">
                            Adress
                        </label>
                        <input 
                            className="appearance-none max-[567px]:w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="text" 
                            type="text" 
                            placeholder="Les îles de ..."
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="number">
                          Numéro de téléphone 
                        </label>
                        <input 
                            className="appearance-none max-[567px]:w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="text" 
                            type="text" 
                            placeholder="+221 ..."
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="text">
                            Devise
                        </label>
                        <select name="text" id="text" className="appearance-none max-[567px]:w-full border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                          <option value="FXOF">F X0F</option>
                          <option value="Euro">Euro</option>
                          <option value="Dollard">$</option>
                        </select>
                      </div>
                    </div>
                </div>
              </form>
              <footer>
                <div className="w-full">
                    <label htmlFor="file" className="my-3">Ajouter une photo</label>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-slate-200">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div> 
              </footer>
            </div>
        </div>
        </>

    );
};

export default CreerHotel;
