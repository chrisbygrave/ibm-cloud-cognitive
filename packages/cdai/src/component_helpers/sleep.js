//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

export default function sleep(timeInSeconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInSeconds * 1000);
  });
}
