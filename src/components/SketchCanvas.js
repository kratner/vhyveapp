import React from "react";
import ReactDOM from "react-dom";
import { GoPencil, GoCircleSlash, GoTrashcan } from "react-icons/go";
import styled from "styled-components";
import simplify from "simplify-js";
//const _url = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cephalometric_radiograph.JPG/600px-Cephalometric_radiograph.JPG";

const CanvasToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1em;
`;
const CanvasToolIconContainer = styled.div`
  margin: 1em 0;
`;
const PencilIconContainer = styled(CanvasToolIconContainer)``;
const TrashIconContainer = styled(CanvasToolIconContainer)``;
const TrashIcon = styled(GoTrashcan)`
  color: #ffffff;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    color: #fdde6b;
  }
`;
const PencilIcon = styled(GoPencil)`
  color: #ffffff;
  cursor: pointer;
  position: relative;
  left: -2em;
  &:hover {
    color: #fdde6b;
  }
`;

const PencilIconSlash = styled(GoCircleSlash)`
  position: relative;
  left: -0.25em;
  top: 0.25em;
  transform: rotate(90deg);
  color: #ffffff;
  cursor: pointer;
  font-size: 2em;
  opacity: 0;
  &:hover {
    color: #fdde6b;
  }
`;

class DrawCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paths: [[]],
      isDrawing: false,
      top: 0,
      left: 0,
      simplify: false,
      simplifyHighQuality: true,
      simplifyThreshold: 3
    };
  }

  handleTrashClick(thisRef) {
    if (this.state.paths.length > 1) {
      this.setState({
        paths: [[]],
        isDrawing: false
      });
      this.trashicon.style.opacity = "0.5";
    }
  }

  handleCanvasToggle(thisRef) {
    this.refs.canvas.style.opacity =
      this.refs.canvas.style.opacity === "0" ? "1" : "0";
    this.penciliconslash.style.opacity =
      this.refs.canvas.style.opacity === "0" ? "0.5" : "0";
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.refs.canvas);
    const rect = node.getBoundingClientRect();
    const { left, top } = rect;
    this.setState({ top, left });
    this.penciliconslash = document.getElementById("penciliconslash");
    this.trashicon = document.getElementById("trashicon");
    this.refs.canvas.style.transition = ".25s";
  }

  handleMouseDown() {
    if (!this.state.isDrawing) {
      this.setState({
        paths: [].concat(this.state.paths, [[]])
      });
    }
    this.setState({ isDrawing: true });
  }

  handleTouchStart() {
    if (!this.state.isDrawing) {
      this.setState({
        paths: [].concat(this.state.paths, [[]])
      });
    }
    this.setState({ isDrawing: true });
  }

  handleMouseMove(e) {
    if (this.state.isDrawing) {
      const x = e.pageX - this.state.left;
      const y = e.pageY - this.state.top;
      const paths = this.state.paths.slice(0);
      const activePath = paths[paths.length - 1];
      activePath.push({ x, y });
      this.setState({ paths });
      this.trashicon.style.opacity = "1";
    }
  }

  handleTouchMove(e) {
    if (this.state.isDrawing) {
      const x = e.changedTouches[0].clientX - this.state.left;
      const y = e.changedTouches[0].clientY - this.state.top;
      const paths = this.state.paths.slice(0);
      const activePath = paths[paths.length - 1];
      activePath.push({ x, y });
      this.setState({ paths });
      this.trashicon.style.opacity = "1";
    }
  }

  handleMouseUp() {
    if (this.state.isDrawing) {
      this.setState({ isDrawing: false });
    }
  }

  handleTouchEnd() {
    if (this.state.isDrawing) {
      this.setState({ isDrawing: false });
    }
  }

  toggleSimplify() {
    this.setState({ simplify: !this.state.simplify });
  }

  setThreshold(e) {
    this.setState({ simplifyThreshold: e.target.value });
  }

  render() {
    const paths = this.state.paths
      .map(_points => {
        let path = "";
        let points = _points.slice(0);
        if (this.state.simplify) {
          points = simplify(
            points,
            this.state.simplifyThreshold,
            this.state.simplifyHighQuality
          );
        }
        if (points.length > 0) {
          path = `M ${points[0].x} ${points[0].y}`;
          var p1, p2, end;
          for (var i = 1; i < points.length - 2; i += 2) {
            p1 = points[i];
            p2 = points[i + 1];
            end = points[i + 2];
            path += ` C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${end.x} ${end.y}`;
          }
        }
        return path;
      })
      .filter(p => p !== "");
    return (
      <div>
        {/*
        <label>
          <input
            type="checkbox"
            checked={this.state.simplify}
            onChange={this.toggleSimplify.bind(this)}
          />{" "}
          Simplify path
        </label>
        <label>
          <input
            type="number"
            value={this.state.simplifyThreshold}
            onChange={this.setThreshold.bind(this)}
          />
        </label>
        <br />
*/}
        <svg
          style={this.props.style}
          /*
          width={this.props.width}
          height={this.props.height}
          */
          ref="canvas"
          onMouseDown={this.handleMouseDown.bind(this)}
          onTouchStart={this.handleTouchStart.bind(this)}
          onMouseUp={this.handleMouseUp.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
          onMouseMove={this.handleMouseMove.bind(this)}
          onTouchMove={this.handleTouchMove.bind(this)}
        >
          {/*<image x={0} y={0} xlinkHref={_url} height={480} width={600} /> */}
          {paths.map(path => {
            return (
              <path
                key={path}
                stroke="blue"
                strokeWidth={2}
                d={path}
                fill="none"
              />
            );
          })}
        </svg>
        <CanvasToolContainer>
          <PencilIconContainer>
            <PencilIconSlash id="penciliconslash" />
            <PencilIcon
              id="pencilicon"
              onClick={() => this.handleCanvasToggle(this)}
              title="Toggle Drawing Canvas"
            />
          </PencilIconContainer>
          <TrashIconContainer>
            <TrashIcon
              id="trashicon"
              onClick={() => this.handleTrashClick(this)}
              title="Clear Canvas"
            />
          </TrashIconContainer>
        </CanvasToolContainer>
      </div>
    );
  }
}

export default DrawCanvas;
