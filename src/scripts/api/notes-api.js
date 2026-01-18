import { fallbackNotes, fallbackArchivedNotes } from '../data/fallback-data.js';

const BASE_URL = 'https://notes-api.dicoding.dev/v2';

const NotesAPI = {
  async getNotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes`);
      const result = await response.json();

      if (result.status === 'success' && result.data.length > 0) {
        return result.data;
      } else {
        console.warn('API returned empty, using fallback notes');
        return fallbackNotes;
      }
    } catch (error) {
      console.warn(
        'Failed to fetch notes from API, using fallback data:',
        error
      );
      return fallbackNotes;
    }
  },
  async getArchivedNotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes/archived`);
      const result = await response.json();

      if (result.status === 'success') {
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.warn(
        'Failed to fetch archived notes from API, using fallback data:',
        error
      );
      return fallbackArchivedNotes;
    }
  },

  async getNoteById(id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}`);
      const result = await response.json();

      if (result.status === 'success') {
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(`Failed to fetch note: ${error.message}`);
    }
  },

  async createNote(title, body) {
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      });
      const result = await response.json();

      if (result.status === 'success') {
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(`Failed to create note: ${error.message}`);
    }
  },

  async archiveNote(id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}/archive`, {
        method: 'POST',
      });
      const result = await response.json();

      if (result.status === 'success') {
        return result.message;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(`Failed to archive note: ${error.message}`);
    }
  },

  async unarchiveNote(id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}/unarchive`, {
        method: 'POST',
      });
      const result = await response.json();

      if (result.status === 'success') {
        return result.message;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(`Failed to unarchive note: ${error.message}`);
    }
  },

  async deleteNote(id) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();

      if (result.status === 'success') {
        return result.message;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      throw new Error(`Failed to delete note: ${error.message}`);
    }
  },
};

export default NotesAPI;
