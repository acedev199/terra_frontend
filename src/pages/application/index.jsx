import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, UserModal, NewWorldModal, WorldListContent, WorldLoadGenerating, WorldCardModal, RenameWorldModal } from "../../widgets/application";
import { showWorldCardModal, showRenameWorldModal } from "../../redux/worldCardsSlice";

export function Application() {
  const dispatch = useDispatch();
  const visibleWorldCardModal = useSelector((state) => state.worldCards.visibleWorldCardModal.visible);
  const visibleRenameWorldModal = useSelector((state) => state.worldCards.visibleRenameWorldModal)
  const [isModal, setIsModal] = useState(false);
  const [isNewWorldModal, setNewWorldModal] = useState(false);
  const [generatingProgress, setGeneratingProgress] = useState(0);
  const [isGenerated, setIsGenerated] = useState(true);

  const handleClickOutside = () => {
    setIsModal(false);
    setNewWorldModal(false);
    dispatch(showWorldCardModal({id: null, visible: false}));
    dispatch(showRenameWorldModal(false));
  };

  const handleClickInside = (event) => {
    event.stopPropagation();
    setIsModal(true);
  };

  const handleNewWorldModal = (event) => {
    event.stopPropagation();
    setNewWorldModal(true);
  };

  const handleClickInsideNewWorld = (event) => {
    event.stopPropagation();
    setNewWorldModal(true);
  };

  useEffect(() => {
    if (generatingProgress < 100) {
      const timer = setTimeout(() => {
        setGeneratingProgress((prev) => prev + 2);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setIsGenerated(true);
    }
  }, [generatingProgress]);

  return (
    <div className="w-full min-h-screen bg-zinc-900" onClick={handleClickOutside}>
      {!isGenerated && <WorldLoadGenerating generatingProgress={generatingProgress} />}
      {isGenerated &&
        (
          <div
            className="flex items-start justify-center min-h-screen w-full flex-wrap shrink-0"
          >
            {(!isModal && !isNewWorldModal && !visibleWorldCardModal && !visibleRenameWorldModal) && <Navbar handleClickInside={handleClickInside} handleNewWorldModal={handleNewWorldModal} />}
            {isModal && <UserModal handleClickInside={handleClickInside} />}
            {isNewWorldModal && <NewWorldModal handleClickInsideNewWorld={handleClickInsideNewWorld} setNewWorldModal={setNewWorldModal} setIsGenerated={setIsGenerated} setGeneratingProgress={setGeneratingProgress} />}
            {(!isModal && !isNewWorldModal && !visibleWorldCardModal && !visibleRenameWorldModal) && <WorldListContent />}
            {visibleWorldCardModal && <WorldCardModal />}
            {visibleRenameWorldModal && <RenameWorldModal />}
          </div>
        )}
    </div>
  );
}

export default Application;
