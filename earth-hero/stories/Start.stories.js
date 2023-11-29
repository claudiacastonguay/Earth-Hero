import React from 'react';
import HomePage from '../pages/Home-page';
import GreenButton from '../comps/Green-button';
import Tutorial from '../pages/Tutorial';
import ChooseCategory from '../pages/Choose-Category';
import ChooseSubCategory from '../pages/Choose-Subcategory';

export default {
    title: 'Start',
    component: HomePage,
};

export const LandingPage = () => <HomePage />;
export const TheTutorial = () => <Tutorial />;
export const ChooseMainCategory = () => <ChooseCategory />;
export const SubCategoryChoices = () => <ChooseSubCategory />;