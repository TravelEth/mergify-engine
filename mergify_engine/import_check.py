# -*- encoding: utf-8 -*-
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.


from mergify_engine import service
from mergify_engine import signals


def main() -> int:
    service.setup("import-check")
    signals.setup()

    from mergify_engine.web.root import app  # noqa isort:skip
    from mergify_engine import worker  # noqa isort:skip
    from mergify_engine import actions  # noqa isort:skip

    return 0
