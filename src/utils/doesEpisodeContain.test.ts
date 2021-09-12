import doesEpisodeContainInNameOrSummary from "./doesEpisodeContain";
import episodes from "../episodes.json";

test("when given a search term contained in episode name or summary, returns true", () => {
  expect(doesEpisodeContainInNameOrSummary(episodes[0], "Winter")).toBe(true);
});

test("when given a search term contained in episode name or summary, returns true with case insensitivity", () => {
  expect(
    doesEpisodeContainInNameOrSummary(episodes[0], "WINTER IS COMING")
  ).toBe(true);
});

test("when given a search term not contained in episode name or summary, returns false", () => {
  expect(doesEpisodeContainInNameOrSummary(episodes[0], "Aubergine")).toBe(
    false
  );
});
