// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import '@alaskaairux/auro-interruption/dist/auro-dialog';
import React, { useRef, useEffect } from 'react';

function AuroDialog(props) {
  const ref = useRef();
  const { open, onToggle, modal, unformatted, children } = props;

  function invokeCallback(event) {
    if (onToggle) {
      onToggle(event);
    }
  }

  useEffect(() => {
    const { current } = ref;
    current.addEventListener('toggle', invokeCallback);
    return () => {
      current.removeEventListener('toggle', invokeCallback);
    }
  });

  return <auro-dialog
    ref={ref}
    open={open ? "" : undefined}
    modal={modal ? "" : undefined}
    unformatted={unformatted ? "" : undefined}>
    {children}
  </auro-dialog>
}

export default AuroDialog;
