// This file is part of the Library Management System project.
// It is designed to handle the registration of libraries, including their name, number of seats, and shift timings.

'use client';
import React, { use, useState } from 'react';

const Handler = () => {
    const [form, setForm] = useState({
        libraryName: '',
        seats: '',
        shiftStart: '',
        shiftEnd: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you can send form data to your backend if needed
    };

    return (
        <>  
            <div className="flex items-center justify-center py-6 bg-gradient-to-r from-blue-100 to-blue-300 rounded-b-lg shadow-md mb-8">
                <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide drop-shadow-lg">EZhandle</h1>
            </div>
            <div className="flex justify-center">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                    <h2 className="text-xl font-semibold text-blue-600 mb-6 text-center">Register Your Library</h2>
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Library Name:</label>
                                <input
                                    type="text"
                                    name="libraryName"
                                    value={form.libraryName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Number of Seats:</label>
                                <input
                                    type="number"
                                    name="seats"
                                    value={form.seats}
                                    onChange={handleChange}
                                    required
                                    min={1}
                                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Shift Start:</label>
                                <input
                                    type="time"
                                    name="shiftStart"
                                    value={form.shiftStart}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Shift End:</label>
                                <input
                                    type="time"
                                    name="shiftEnd"
                                    value={form.shiftEnd}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 mt-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md"
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-green-600 mb-4">Library Registered Successfully!</h3>
                            <div className="bg-blue-50 rounded-lg p-4 text-left">
                                <p><span className="font-bold">Library Name:</span> {form.libraryName}</p>
                                <p><span className="font-bold">Number of Seats:</span> {form.seats}</p>
                                <p><span className="font-bold">Shift:</span> {form.shiftStart} - {form.shiftEnd}</p>
                            </div>
                            <button
                                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                                onClick={() => {
                                    setForm({
                                        libraryName: '',
                                        seats: '',
                                        shiftStart: '',
                                        shiftEnd: ''
                                    });
                                    setSubmitted(false);
                                }}
                            >
                                Register Another
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Handler;