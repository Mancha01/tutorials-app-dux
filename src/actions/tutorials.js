import * as actionTypes from "./types";

import TutorialDataService from "../services/TutorialService";

export const createTutorial = (title, description) => async (dispatch) => {
  try {
    const res = await TutorialDataService.create({ title, description });

    dispatch({
      type: actionTypes.CREATE_TUTORIAL,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveTutorials = () => async (dispatch) => {
  try {
    const res = await TutorialDataService.getAll();

    dispatch({
      type: actionTypes.RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = await TutorialDataService.update(id, data);

    dispatch({
      type: actionTypes.UPDATE_TUTORIAL,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTutorial = (id) => async (dispatch) => {
  try {
    await TutorialDataService.remove(id);

    dispatch({
      type: actionTypes.DELETE_TUTORIAL,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTutorials = () => async (dispatch) => {
  try {
    const res = await TutorialDataService.removeAll();

    dispatch({
      type: actionTypes.DELETE_ALL_TUTORIALS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findTutorialsByTitle = (title) => async (dispatch) => {
  try {
    const res = await TutorialDataService.findByTitle(title);

    dispatch({
      type: actionTypes.RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
