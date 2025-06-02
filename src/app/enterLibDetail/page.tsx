// This file is part of the Library Management System project.
// It is designed to handle the registration of libraries, including their name, number of seats, and shift timings.

'use client';
import React, { useState } from 'react';

const Handler = () => {
    const [form, setForm] = useState({
        libraryName: '',
        seats: '',
        shifts: [] as { name: string; start: string; end: string }[],
    });
    const [shiftInput, setShiftInput] = useState({ name: '', start: '', end: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleShiftInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShiftInput({ ...shiftInput, [e.target.name]: e.target.value });
    };

    const addShift = (e: React.FormEvent) => {
        e.preventDefault();
        if (shiftInput.name && shiftInput.start && shiftInput.end) {
            setForm({
                ...form,
                shifts: [...form.shifts, shiftInput],
            });
            setShiftInput({ name: '', start: '', end: '' });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Send form data to backend if needed
    };

    return (
        <>  
            <div className="bg-white shadow-md dark:bg-gray-800 p-6 mb-8 rounded-lg flex justify-center items-center">
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
                            {/* Shift Section */}
                            <div className="border-t pt-4 mt-4">
                                <label className="block text-gray-700 font-medium mb-2">Add Shift:</label>
                                <div className="flex flex-col gap-2">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Shift Name (e.g. Morning)"
                                        value={shiftInput.name}
                                        onChange={handleShiftInputChange}
                                        className="px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                    <div className="flex gap-2">
                                        <input
                                            type="time"
                                            name="start"
                                            value={shiftInput.start}
                                            onChange={handleShiftInputChange}
                                            className="flex-1 px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                        <input
                                            type="time"
                                            name="end"
                                            value={shiftInput.end}
                                            onChange={handleShiftInputChange}
                                            className="flex-1 px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={addShift}
                                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                                    >
                                        Add Shift
                                    </button>
                                </div>
                                {/* List of added shifts */}
                                {form.shifts.length > 0 && (
                                    <ul className="mt-4 space-y-2">
                                        {form.shifts.map((shift, idx) => (
                                            <li key={idx} className="bg-blue-50 p-2 rounded">
                                                <span className="font-bold">{shift.name}</span>: {shift.start} - {shift.end}
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
                                <p className="font-bold">Shifts:</p>
                                <ul className="ml-4 list-disc">
                                    {form.shifts.map((shift, idx) => (
                                        <li key={idx}>
                                            <span className="font-bold">{shift.name}</span>: {shift.start} - {shift.end}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button
                                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                                onClick={() => {
                                    setForm({
                                        libraryName: '',
                                        seats: '',
                                        shifts: [],
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