import { render, screen } from "@testing-library/react";
import { describe, expect, it, beforeEach, vi } from "vitest";
import React from "react";

import App from "./App";

import { Provider } from "react-redux";
import { AppProvider } from "./context";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store);

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.StrictMode>
      <Router>
        <AppProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>{children}</PersistGate>
          </Provider>
        </AppProvider>
      </Router>
    </React.StrictMode>q
  );
};

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("#App", () => {
  it("renders all categories in the navbar", async () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    );

    const categoriesToCheck = [
      "Basic",
      "Entrances",
      "Exits",
      "Attention",
      "Background",
    ];

    for (const categoryString of categoriesToCheck) {
      const basicString = await screen.findAllByText(categoryString);
      expect(basicString).toBeDefined();
    }
  });
});
