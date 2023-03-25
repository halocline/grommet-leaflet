import {
  createElementObject,
  createPathComponent,
  extendContext,
} from '@react-leaflet/core';
import L from 'leaflet';

const getBounds = props => {
  const { center, size } = props;
  return L.latLng(center[0], center[1]).toBounds(size);
};

const createSquare = (props, context) => {
  const square = new L.Rectangle(getBounds(props));
  return createElementObject(
    square,
    extendContext(context, { overlayContainer: square }),
  );
};

const updateSquare = (instance, props, prevProps) => {
  if (props.center !== prevProps.center || props.size !== prevProps.size) {
    instance.setBounds(getBounds(props));
  }
};

const Square = createPathComponent(createSquare, updateSquare);

export default Square;
