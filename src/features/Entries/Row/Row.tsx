import { ArrowDown, ArrowUp, Trash2 } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useEntryActions } from "../../../hooks/useEntryAction";
import {
  Actions,
  Container,
  Title,
  Description,
  Content,
  ActionButton,
  Heading,
  Badge,
  ContentInnerWrapper,
  ContentImage,
} from "./styles";
import { Spinner } from "../../../components/Spinner/Spinner";

interface Props {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  isPublished: boolean;
}

export const Row = ({
  id,
  title,
  isPublished,
  description,
  imageUrl,
}: Props) => {
  const { push } = useRouter();
  const {
    handleRemoveEntry,
    handlePublishEntry,
    isLoadingPublish,
    isLoadingRemove,
  } = useEntryActions();

  const handleRemoveClick = useCallback(
    () => handleRemoveEntry(id),
    [handleRemoveEntry, id]
  );

  const handlePublishClick = useCallback(
    () =>
      handlePublishEntry(
        { id, title, description, isPublished, imageUrl },
        !isPublished
      ),
    [handlePublishEntry, id, title, description, isPublished, imageUrl]
  );

  const handleClick = useCallback(() => {
    push(`/?id=${id}`);
  }, [id, push]);

  return (
    <Container>
      <Content className={isPublished ? "published" : ""} onClick={handleClick}>
        {imageUrl ? (
          <ContentImage style={{ backgroundImage: `url(${imageUrl})` }} />
        ) : null}
        <ContentInnerWrapper>
          <Heading>
            <Title>{title}</Title>
            <Badge>ID: {id}</Badge>
          </Heading>
          <Description>{description}</Description>
        </ContentInnerWrapper>
      </Content>
      <Actions>
        <ActionButton onClick={handlePublishClick}>
          {isLoadingPublish ? (
            <Spinner />
          ) : (
            <>{isPublished ? <ArrowDown /> : <ArrowUp />}</>
          )}
        </ActionButton>
        <ActionButton onClick={handleRemoveClick}>
          {isLoadingRemove ? <Spinner /> : <Trash2 />}
        </ActionButton>
      </Actions>
    </Container>
  );
};
