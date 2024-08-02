"use client"

import { useState } from "react";
import { ArrowDown } from "./arrowDown";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectValue, setSelectValue] = useState("Option 1")

  const updateValue = (value: string) => {
    setSelectValue(value)
    setIsOpen(false)
  }

  return (
    <div>
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      <p className="text-base">This is a paragraph</p>
      <a href="https://freecodecamp.org">This is an anchor</a>
      <div className="my-4">
        <button className="btn btn-primary">This is a Primary button</button>
      </div>
      <div className="my-4">
        <button className="btn btn-secondary">This is a Secondary button</button>
      </div>
      <div className="my-4">
        <button disabled className="btn btn-primary">This is a Disabled button</button>
      </div>
      <div>
        <input type="text" placeholder="E-mail" className="outline-none" />
      </div>
      <div>
        <input type="text" placeholder="E-mail" disabled className="outline-none" />
      </div>
      <div>
        <input type="date" className="outline-none" />
      </div>
      <div className="flex my-2">
        <input type="checkbox" name="" id="checkbox" />
        <label htmlFor="checkbox">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam ex saepe quis quas rerum libero voluptates veniam at blanditiis adipisci assumenda repellendus, perferendis vel, vero minus dicta laudantium! Blanditiis!</label>
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className="Select">
        <div className="child items-center justify-between flex" onClick={() => { setIsOpen(!isOpen) }}>
          <span className="pr-4">{selectValue}</span>
          <div className={isOpen ? "rotate-180 transition" : "rotate-0 transition"}>
            <ArrowDown />
          </div>
        </div>
        {isOpen && (
          <div>
            <ul className="flex-col divide-y border-t">
              <li className="child" onClick={() => updateValue("Option 1")}>Option 1</li>
              <li className="child" onClick={() => updateValue("Option 2")}>Option 2</li>
              <li className="child" onClick={() => updateValue("Option 3")}>Option 3</li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}
