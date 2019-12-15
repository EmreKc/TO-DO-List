import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import FormContainer from '../../containers/FormContainer';
import FormItemContainer from '../../containers/FormItemContainer';

import './Content.css';

const Content = props => {
  
  return (
    <div className={props.className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Welcome!</h5>
                <p className="card-text">To get started, add some items to your list:</p>
                <div className="d-inline-block">
                  <FormContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
        {props.items.length ? (
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="content__todos">
                <ul className="list-group content__todos__ul">
                  <DragDropContext >
                    <Droppable droppableId="droppable">
                      {provided => (
                        <div ref={provided.innerRef}>
                          {props.items
                          .filter((item) => props.filter === "Done" ? item.completed : props.filter === "Undone" ? !item.completed : 1)
                          .map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {provided => (
                                <div
                                  ref={provided.innerRef}
                                  data-testid="content-draggable-item"
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="content__todos__li">
                                  {<FormItemContainer item={item} />}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};


export default Content;
