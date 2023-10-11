import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Routes from './Routes';
import { dogs } from './App';

test('renders all dog names in the dog list', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={["/dogs"]}>
            <Routes dogs={dogs} />
        </MemoryRouter>
    );
    const dogNames = dogs.map(d => d.name);
    for (const name of dogNames) {
        const linkElement = getByText(new RegExp(name, "i"));
        expect(linkElement).toBeInTheDocument();
    }
});

test('renders only Frodo\'s info', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={["/dogs/frodo"]}>
            <Routes dogs={dogs} />
        </MemoryRouter>
    );
    const frodoInfo = dogs.find(d => d.name === "Frodo");
    const oliveInfo = dogs.find(d => d.name === "Olive");

    const liElement = getByText(new RegExp(frodoInfo.facts[0], "i"));
    expect(liElement).toBeInTheDocument();
    
    expect(screen.queryByText(new RegExp(oliveInfo.facts[0], "i"))).toBeNull();

});

test('renders home on a bad route', () => {
    const {getByText } = render(
        <MemoryRouter initialEntries={["/bad-route"]}>
            <Routes dogs={dogs} />
        </MemoryRouter>
    );
    const dogNames = dogs.map(d => d.name);
    for (const name of dogNames) {
        const linkElement = getByText(new RegExp(name, "i"));
        expect(linkElement).toBeInTheDocument();
    }
});