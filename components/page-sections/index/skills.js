import React, { useState, useEffect } from 'react'
import { Rating } from "@material-tailwind/react";

export const SKILLS_TAG = "<skills>";

export default function Skills() {
    const [selectedSkill, setSelectedSkill] = useState("js");

    return (
        <section id="skills" className="flex flex-col items-center mb-10">
            <p className="mt-4 text-2xl"> {SKILLS_TAG} </p>
            <h2 className="text-5xl mb-10">
                What Skills Do I Have?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full justify-items-center">
                {/* TECHNOLOGIES */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10">
                    <section>
                        <h3>Languages I know</h3>
                        <ul className="border border-primary-50 p-3 rounded-lg my-3 flex flex-col space-y-3">
                            <li className="flex justify-between max-w-sm items-center text-lg">
                                <p>HTML</p>
                                <Rating className="cursor-default" ratedColor="orange" value={5} readonly />
                            </li>

                            <hr />

                            <li className="flex justify-between max-w-sm items-center text-lg">
                                <p>CSS</p>
                                <Rating className="cursor-default" ratedColor="orange" value={4} readonly />
                            </li>

                            <hr />

                            <li className="flex justify-between max-w-sm items-center text-lg">
                                <p>Javascript</p>
                                <Rating className="cursor-default" ratedColor="orange" value={5} readonly />
                            </li>

                            <hr />

                            <li className="flex justify-between max-w-sm items-center text-lg">
                                <p>Elixir</p>
                                <Rating className="cursor-default" ratedColor="orange" value={4} readonly />
                            </li>

                            <hr />

                            <li className="flex justify-between max-w-sm items-center text-lg">
                                <p>C#</p>
                                <Rating className="cursor-default" ratedColor="orange" value={4} readonly />
                            </li>

                            <hr />

                            <li className="flex justify-between max-w-sm items-center text-lg">
                                <p>Python</p>
                                <Rating className="cursor-default" ratedColor="orange" value={3} readonly />
                            </li>

                        </ul>
                    </section>

                    <section>
                        <h3>Frameworks I've dealt with</h3>
                        <div className="flex space-x-2 justify-center w-full mt-2">
                            <button onClick={() => setSelectedSkill("js")} className={`px-2 py-1 ${selectedSkill == "js" ? "bg-accent-500" : " bg-accent-400"} rounded-full w-full`}>Javascript</button>
                            <button onClick={() => setSelectedSkill("cs")} className={`px-2 py-1 ${selectedSkill == "cs" ? "bg-accent-500" : " bg-accent-400"} rounded-full w-full`}>C#</button>
                            <button onClick={() => setSelectedSkill("css")} className={`px-2 py-1 ${selectedSkill == "css" ? "bg-accent-500" : " bg-accent-400"} rounded-full w-full`}>CSS</button>
                            <button onClick={() => setSelectedSkill("elixir")} className={`px-2 py-1 ${selectedSkill == "elixir" ? "bg-accent-500" : " bg-accent-400"} rounded-full w-full`}>Elixir</button>
                        </div>
                        <ul className="border border-primary-50 p-3 rounded-lg my-3 flex flex-col space-y-3 mb-3">
                            {selectedSkill == "js" ? (
                                <>
                                    <li className="flex justify-between max-w-sm items-center text-lg">
                                        <p>Ember JS</p>
                                        <Rating className="cursor-default" ratedColor="orange" value={3} readonly />
                                    </li>

                                    <hr />

                                    <li className="flex justify-between max-w-sm items-center text-lg">
                                        <p>React JS</p>
                                        <Rating className="cursor-default" ratedColor="orange" value={4} readonly />
                                    </li>

                                    <hr />

                                    <li className="flex justify-between max-w-sm items-center text-lg">
                                        <p>Next JS</p>
                                        <Rating className="cursor-default" ratedColor="orange" value={5} readonly />
                                    </li>
                                </>
                            ) : (<></>)}

                            {selectedSkill == "cs" ? (
                                <>
                                    <li className="flex justify-between max-w-sm items-center text-lg">
                                        <p>Blazor</p>
                                        <Rating className="cursor-default" ratedColor="orange" value={5} readonly />
                                    </li>
                                </>
                            ) : (<></>)}

                            {selectedSkill == "css" ? (
                                <>
                                    <li className="flex justify-between max-w-sm items-center text-lg">
                                        <p>Tailwind CSS</p>
                                        <Rating className="cursor-default" ratedColor="orange" value={5} readonly />
                                    </li>

                                    <hr/>

                                    <li className="flex justify-between max-w-sm items-center text-lg">
                                        <p>Bootstrap</p>
                                        <Rating className="cursor-default" ratedColor="orange" value={4} readonly />
                                    </li>

                                </>
                            ) : (<></>)}

                            {selectedSkill == "elixir" ? (
                                <li className="flex justify-between max-w-sm items-center text-lg">
                                    <p>Phoenix (Elixir Based)</p>
                                    <Rating className="cursor-default" ratedColor="orange" value={3} readonly />
                                </li>
                            ) : (<></>)}
                        </ul>
                    </section>

                </div>

                {/* GENERAL SKILLS */}
                <div>
                    <h3>Other Skills</h3>
                    <ul className="my-3 flex flex-col space-y-3 mb-3 text-lg">
                        <li>
                            <h4 className="font-bold text-primary-200">Scrum & Agile Methodologies</h4>
                            <p>I've worked in teams that use Scrum, so I have worked in sprints with strict deadlines. </p>
                        </li>
                        <li>
                            <h4 className="font-bold text-primary-200">Cross-Functional Working</h4>
                            <p>Working within a team, I've found that it's best to do aspects of other roles if needed, eg. QA when many tickets are piled up at once to ensure features are marked as done and can be shipped off.</p>

                        </li>
                        <li>
                            <h4 className="font-bold text-primary-200">Adaptability</h4>
                            <p>While working, I have picked up new languages and frameworks very easily. 90% of the languages and frameworks I am confident in using, I have learned on the fly by being put into projects with assignments to do.</p>
                        </li>
                        <li>
                            <h4 className="font-bold text-primary-200">Teamwork</h4>
                            <p>Lorum Ipsum</p>

                        </li>
                        <li>
                            <h4 className="font-bold text-primary-200">Effective Communication</h4>
                            <p>Lorum Ipsum</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}