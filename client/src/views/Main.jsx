import { LeafletContainer } from "../maps/leaflet-container";
import { LeafletMap } from "../maps/leaflet-map";

export const Main = () => {
  return (
    <LeafletContainer>
      <LeafletMap />
    </LeafletContainer>
  );
};
