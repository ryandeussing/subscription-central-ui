import React, { FC } from 'react';
import {
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateVariant,
  Title
} from '@patternfly/react-core';
import CreateManifestButtonWithModal from '../CreateManifestButtonWithModal/CreateManifestButtonWithModal';
import { PlusCircleIcon } from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';
import { User } from '../../hooks/useUser';

interface CreateManifestButtonWithModalProps {
  user: User;
}

const CreateManifestPanel: FC<CreateManifestButtonWithModalProps> = ({ user }) => {
  return (
    <EmptyState variant={EmptyStateVariant.large}>
      <EmptyStateIcon icon={PlusCircleIcon} />
      <Title headingLevel="h2" size="lg">
        Create a new manifest to export subscriptions
      </Title>
      <EmptyStateBody>
        You currently have no manifests displayed. Create a new manifest to export subscriptions
        from the Red Hat Customer Portal to your on-premise subscription management application.
      </EmptyStateBody>
      <CreateManifestButtonWithModal user={user} />
    </EmptyState>
  );
};

export default CreateManifestPanel;
