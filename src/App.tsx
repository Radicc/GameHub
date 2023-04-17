import { useState } from "react";
import "./index.css";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { toggle } from "./components/GameGrid";
import { BsChevronDown } from "react-icons/bs";
import GenreListMobile from "./components/GenreListMobile";
import ResetFilters from "./components/ResetFilters";

export interface GameQuery {
  genre: string | null;
  platform: string;
  order: string;
  searchText: string;
  color: string;
  id: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  console.log(gameQuery.order);
  console.log(gameQuery.platform);
  return (
    <>
      <Grid
        bg={useColorModeValue("gray.50", "")}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <Show above="lg">
          <GridItem paddingX={5} area="aside">
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box>
            <GameHeading gameQuery={gameQuery} />

            <Show below="lg">
              <HStack>
                <GridItem padding={2}>
                  <GenreListMobile
                    onSelectGenre={(genre) =>
                      setGameQuery({ ...gameQuery, genre })
                    }
                    selectedGenre={gameQuery.genre}
                  />
                </GridItem>

                {(gameQuery.genre || gameQuery.order || gameQuery.platform) && (
                  <ResetFilters
                    onSelectedPlatform={(platform, order, genre) =>
                      setGameQuery({ ...gameQuery, platform, order, genre })
                    }
                  />
                )}
              </HStack>
            </Show>

            <Flex gap={2} paddingLeft={[2, 5]}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />

              <SortSelector
                order={gameQuery.order}
                onSelectSortOrder={(order) =>
                  setGameQuery({ ...gameQuery, order })
                }
              />
              <Show above="lg">
                {(gameQuery.genre || gameQuery.order || gameQuery.platform) && (
                  <ResetFilters
                    onSelectedPlatform={(platform, order, genre) =>
                      setGameQuery({ ...gameQuery, platform, order, genre })
                    }
                  />
                )}
              </Show>
            </Flex>

            <GameGrid gameQuery={gameQuery} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
